package com.github.minesquad.bukkit.websocket.errors;

import com.google.gson.JsonObject;

public class ChannelNotFoundErrorResponse extends ErrorResponse {

    private String channel;

    public ChannelNotFoundErrorResponse(String channel) {
        this.channel = channel;
    }

    @Override
    public JsonObject getMessage() {
        JsonObject message = new JsonObject();
        message.addProperty("error", "Channel `" + channel + "` not found");

        return message;
    }
}
