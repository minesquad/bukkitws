package com.github.minesquad.bukkit;

import java.math.BigInteger;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Timer;
import java.util.concurrent.Executors;

import com.github.minesquad.bukkit.websocket.errors.BadMessageErrorResponse;
import com.github.minesquad.bukkit.websocket.errors.ChannelNotFoundErrorResponse;
import com.github.minesquad.bukkit.workers.MinecraftWorker;
import com.github.minesquad.bukkit.workers.SystemWorker;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.github.minesquad.bukkit.websocket.Channel;
import com.github.minesquad.bukkit.websocket.ChannelEvent;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;

/**
 * WebSocket сервер
 */
public class WebSocketServer extends org.java_websocket.server.WebSocketServer {

    private final WebSocketPlugin plugin;
    private final JsonParser parser = new JsonParser();
    private SystemWorker systemWorker;
    private MinecraftWorker minecraftOnlineWorker;

    private HashMap<String, Channel> channels = new HashMap<>();

    WebSocketServer(WebSocketPlugin instance, int port) {
        super(new InetSocketAddress(port));
        plugin = instance;
        systemWorker = new SystemWorker(plugin);
        minecraftOnlineWorker = new MinecraftWorker(plugin);
    }

    public WebSocketServer(WebSocketPlugin instance, InetSocketAddress address) {
        super(address);
        plugin = instance;
        systemWorker = new SystemWorker(plugin);
    }

    /**
     * Регистрация канала
     *
     * @param channel Channel
     */
    void registerChannel(Channel channel) {
        channels.put(channel.getName(), channel);
    }


    /**
     * @param conn      WebSocket
     * @param handshake ClientHandshake
     */
    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        System.out.println(conn.getRemoteSocketAddress().getAddress().getHostAddress() + " entered the room!");
    }

    /**
     * @param conn   WebSocket
     * @param code   int
     * @param reason String
     * @param remote boolean
     */
    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        this.channels.forEach((String channelName, Channel channel) -> {
            channel.leave(conn);
        });
    }

    /**
     * Событие получения сообщения
     *
     * @param conn    WebSocket
     * @param message String
     */
    @Override
    public void onMessage(WebSocket conn, String message) {
        try {
            JsonObject mainObject = parser.parse(message).getAsJsonObject();

            BigInteger messageId = mainObject.get("id").getAsBigInteger();
            String channelName = mainObject.get("channel").getAsString();
            String event = mainObject.get("event").getAsString();
            JsonObject data;
            if (mainObject.has("data")) {
                data = mainObject.get("data").getAsJsonObject();
            } else {
                data = new JsonObject();
            }
            if (!channels.containsKey(channelName)) {
                JsonObject resp = new JsonObject();
                resp.addProperty("id", messageId);
                resp.addProperty("status", false);
                resp.addProperty("event", "response");
                resp.add("data", (new ChannelNotFoundErrorResponse(channelName)).getMessage());

                conn.send(resp.toString());
                return;
            }

            Channel channel = channels.get(channelName);
            channel.handle(new ChannelEvent(messageId, event, conn, data));
        } catch (Exception e) {
            try {
                JsonObject resp = new JsonObject();
                resp.addProperty("status", false);
                resp.addProperty("event", "response");
                resp.add("data", (new BadMessageErrorResponse()).getMessage());
                conn.send(resp.toString());
                conn.close();
                e.printStackTrace();
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }

    /**
     * Событие получения сообщения
     *
     * @param conn    WebSocket
     * @param message ByteBuffer
     */
    @Override
    public void onMessage(WebSocket conn, ByteBuffer message) {
        conn.close();
    }

    /**
     * @param conn WebSocket
     * @param ex   Exception
     */
    @Override
    public void onError(WebSocket conn, Exception ex) {
        ex.printStackTrace();
    }

    /**
     * Событие запуска сервара
     */
    @Override
    public void onStart() {
        System.out.println("Server started!");

        // Запускаем WebSocket сервер
        Executors.newSingleThreadExecutor().execute(() -> {
            Timer timer = new Timer(true);
            timer.scheduleAtFixedRate(systemWorker, 1000, 5000);
        });
        Executors.newSingleThreadExecutor().execute(() -> {
            Timer timer = new Timer(true);
            timer.scheduleAtFixedRate(minecraftOnlineWorker, 1000, 5000);
        });
    }

    public void broadcast(String channelName, String event) {
        broadcast(channelName, event, new JsonObject());
    }

    public void broadcast(String channelName, String event, JsonObject data) {
        if (!channels.containsKey(channelName)) {
            throw new RuntimeException("No such channel");
        }

        Channel channel = channels.get(channelName);
        channel.broadcast(event, data);
    }
}