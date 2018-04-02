package com.github.minesquad.bukkit;

import java.math.BigInteger;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.util.HashMap;

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

    private HashMap<String, Channel> channels = new HashMap<>();

    WebSocketServer(WebSocketPlugin instance, int port) {
        super(new InetSocketAddress(port));
        plugin = instance;
    }

    public WebSocketServer(WebSocketPlugin instance, InetSocketAddress address) {
        super(address);
        plugin = instance;
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
        broadcast(conn + " has left the room!");
        System.out.println(conn + " has left the room!");
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
            Channel channel = channels.get(channelName);
            channel.handle(new ChannelEvent(messageId, event, conn, data));
        } catch (Exception e) {
            e.printStackTrace();
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