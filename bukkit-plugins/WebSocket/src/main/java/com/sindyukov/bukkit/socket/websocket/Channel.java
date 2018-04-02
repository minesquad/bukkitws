package com.sindyukov.bukkit.socket.websocket;

import com.google.gson.JsonObject;
import com.sindyukov.bukkit.socket.websocket.errors.EventNotFoundErrorResponse;
import com.sindyukov.bukkit.socket.websocket.errors.InternalServerErrorResponse;
import com.sindyukov.bukkit.socket.websocket.errors.NotJoinedErrorResponse;
import org.java_websocket.WebSocket;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;

abstract public class Channel {

    private HashMap<String, WebSocket> connections = new HashMap<>();

    abstract public String getName();

    public void join(WebSocket conn) {
        connections.put(conn.toString(), conn);
    }

    public void leave(WebSocket conn) {
        connections.remove(conn.toString());
    }

    public void joinAction(ChannelEvent event) {
        System.out.println("joinAction!");
        join(event.getConnection());
        event.response(new JsonObject());
    }

    public void leaveAction(ChannelEvent event) {
        leave(event.getConnection());
        event.response(new JsonObject());
    }

    public boolean isMember(WebSocket conn) {
        return connections.containsKey(conn.toString());
    }

    public void broadcast(String event) {
        broadcast(event, new JsonObject());
    }

    public void broadcast(String event, JsonObject data) {
        JsonObject message = new JsonObject();
        message.addProperty("channel", getName());
        message.addProperty("event", event);
        message.add("data", data);

        connections.forEach((String key, WebSocket socket) -> {
            socket.send(message.toString());
        });
    }

    public void handle(ChannelEvent event) {
        try {
            if (!event.getName().equals("join") && !isMember(event.getConnection())) {
                event.response(new NotJoinedErrorResponse(getName()));
                return;
            }
            getClass().getMethod(event.getName() + "Action", ChannelEvent.class).invoke(this, event);
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
            e.printStackTrace();
            event.response(new EventNotFoundErrorResponse(getName(), event.getName()));
        } catch (Exception e) {
            e.printStackTrace();
            event.response(new InternalServerErrorResponse());
        }
    }

}
