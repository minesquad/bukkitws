package com.github.minesquad.bukkit.websocket;

import com.github.minesquad.bukkit.websocket.errors.NotJoinedErrorResponse;
import com.google.gson.JsonObject;
import com.github.minesquad.bukkit.websocket.errors.EventNotFoundErrorResponse;
import com.github.minesquad.bukkit.websocket.errors.InternalServerErrorResponse;
import org.java_websocket.WebSocket;
import org.java_websocket.exceptions.WebsocketNotConnectedException;

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

abstract public class Channel {

    private HashMap<String, WebSocket> connections = new HashMap<>();

    abstract public String getName();

    public void join(WebSocket conn) {
        connections.put(conn.toString(), conn);
    }

    public void leave(WebSocket conn) {
        connections.remove(conn.toString());
    }

    @ChannelAction(event = "join")
    public void onJoin(ChannelEvent event) {
        System.out.println("joinAction!");
        join(event.getConnection());
        event.response(new JsonObject());
    }

    @ChannelAction(event = "leave")
    public void onLeave(ChannelEvent event) {
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

        connections.values().forEach((WebSocket socket) -> {
            try {
                socket.send(message.toString());
            } catch (WebsocketNotConnectedException e) {
                //do nothing
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public void handle(ChannelEvent event) {
        try {
            if (!event.getName().equals("join") && !isMember(event.getConnection())) {
                event.response(new NotJoinedErrorResponse(getName()));
                return;
            }

            ArrayList<Method> methods = new ArrayList<>(Arrays.asList(getClass().getMethods()));
            methods.removeIf((Method method) -> {
                if (!method.isAnnotationPresent(ChannelAction.class)) {
                    return true;
                }
                ChannelAction annotation = method.getAnnotation(ChannelAction.class);

                return !annotation.event().equals(event.getName());
            });

            if (methods.isEmpty()) {
                event.response(new EventNotFoundErrorResponse(getName(), event.getName()));
                return;
            }

            if (methods.size() > 1) {
                throw new RuntimeException("Multiple handlers for event `" + event + "` in `" + getName() + "` channel");
            }

            methods.get(0).invoke(this, event);
        } catch (InvocationTargetException | IllegalAccessException e) {
            e.printStackTrace();
            event.response(new EventNotFoundErrorResponse(getName(), event.getName()));
        } catch (Exception e) {
            e.printStackTrace();
            event.response(new InternalServerErrorResponse());
        }
    }
}
