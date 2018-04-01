package com.sindyukov.bukkit.socket.channels;

import com.google.gson.JsonObject;
import com.sindyukov.bukkit.socket.websocket.Channel;
import com.sindyukov.bukkit.socket.websocket.ChannelEvent;
import org.java_websocket.WebSocket;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;

public class TestChannel extends Channel {
    @Override
    public String getName() {
        return "test";
    }

    public void testAction(ChannelEvent event) {
        JsonObject msg = new JsonObject();
        msg.addProperty("cool", "response");
        msg.add("you_say", event.getData());
        event.response(msg);
    }

}
