package com.github.minesquad.bukkit.channels;

import com.google.gson.JsonObject;
import com.github.minesquad.bukkit.websocket.Channel;
import com.github.minesquad.bukkit.websocket.ChannelEvent;

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
