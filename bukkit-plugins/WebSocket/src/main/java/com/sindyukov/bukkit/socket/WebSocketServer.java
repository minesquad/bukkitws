package com.sindyukov.bukkit.socket;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.math.BigInteger;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.sindyukov.bukkit.socket.websocket.Channel;
import com.sindyukov.bukkit.socket.websocket.ChannelEvent;
import org.java_websocket.WebSocket;
import org.java_websocket.WebSocketImpl;
import org.java_websocket.handshake.ClientHandshake;

public class WebSocketServer extends org.java_websocket.server.WebSocketServer {

    private final WebSocketPlugin plugin;
    private final JsonParser parser = new JsonParser();

    private HashMap<String, Channel> channels = new HashMap<>();

    public WebSocketServer(WebSocketPlugin instance, int port ) throws UnknownHostException {
        super( new InetSocketAddress(  port ) );
        plugin = instance;
    }

    public WebSocketServer(WebSocketPlugin instance, InetSocketAddress address ) {
        super( address );
        plugin = instance;
    }


    public void registerChannel(Channel channel) {
        channels.put(channel.getName(), channel);
    }


    @Override
    public void onOpen( WebSocket conn, ClientHandshake handshake ) {
        System.out.println( conn.getRemoteSocketAddress().getAddress().getHostAddress() + " entered the room!" );
    }

    @Override
    public void onClose( WebSocket conn, int code, String reason, boolean remote ) {
        broadcast( conn + " has left the room!" );
        System.out.println( conn + " has left the room!" );
    }

    @Override
    public void onMessage( WebSocket conn, String message ) {
        try {
            JsonObject mainObject = parser.parse(message).getAsJsonObject();

            BigInteger messageId = mainObject.get("id").getAsBigInteger();
            String channelName = mainObject.get("channel").getAsString();
            String event = mainObject.get("event").getAsString();
            JsonObject data;
            if ( mainObject.has("data")) {
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

    @Override
    public void onMessage( WebSocket conn, ByteBuffer message ) {
        conn.close();
    }

    @Override
    public void onError( WebSocket conn, Exception ex ) {
        ex.printStackTrace();
        if( conn != null ) {
            // some errors like port binding failed may not be assignable to a specific websocket
        }
    }

    @Override
    public void onStart() {
        System.out.println("Server started!");
    }

}