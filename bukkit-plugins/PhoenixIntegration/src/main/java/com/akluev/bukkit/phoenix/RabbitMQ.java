
package com.akluev.bukkit.phoenix;

import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import com.google.gson.reflect.TypeToken;
import com.rabbitmq.client.*;

public class RabbitMQ {

    private static final String IN_EXCHANGE_NAME = "minecraft-in";
    private static final String IN_QUEUE_NAME = "minecraft-in";
    private static final String OUT_EXCHANGE_NAME = "minecraft-out";

    private final PhoenixIntegrationPlugin plugin;
    private final Connection connection;
    private Channel out;
    private Channel in;

    RabbitMQ(PhoenixIntegrationPlugin instance) throws IOException, TimeoutException {
        this(instance, "localhost", "guest", "guest");
    }

    RabbitMQ(PhoenixIntegrationPlugin instance, String host) throws IOException, TimeoutException {
        this(instance, "localhost","guest", "guest");
    }

    private RabbitMQ(PhoenixIntegrationPlugin instance, String host, String username, String password) throws IOException, TimeoutException {
        plugin = instance;
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost(host);
        factory.setUsername(username);
        factory.setPassword(password);
        connection = factory.newConnection();
    }

    public void connect() throws Exception {
        out = connection.createChannel();
        out.exchangeDeclare(OUT_EXCHANGE_NAME, "fanout");

        in = connection.createChannel();
        in.exchangeDeclare(IN_EXCHANGE_NAME, "direct");
        in.queueDeclare(IN_QUEUE_NAME, true, false, false, null);
        in.queueBind(IN_QUEUE_NAME, IN_EXCHANGE_NAME, IN_QUEUE_NAME);

        consume();
    }

    public void publish(String message) throws IOException {
        out.basicPublish(OUT_EXCHANGE_NAME, "", null, message.getBytes());
    }

    public void close() {
        try {
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void consume() throws Exception {
        Consumer consumer = new DefaultConsumer(in) {
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                String msg = new String(body, StandardCharsets.UTF_8);
                try {
                    Type type = new TypeToken<Map<String, String>>(){}.getType();
                    Map<String, String> read = plugin.gson.fromJson(msg, type);

                    plugin.handleIncomeEvent(read.get("event"));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        };
        in.basicConsume(IN_QUEUE_NAME, true, consumer);
    }
}
