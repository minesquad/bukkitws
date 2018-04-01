package com.sindyukov.bukkit.socket.websocket.errors;

import com.google.gson.JsonObject;

public class NotJoinedErrorResponse extends ErrorResponse {

    private String channel;

    public NotJoinedErrorResponse(String channel) {
        this.channel = channel;
    }

    @Override
    public JsonObject getMessage() {
        JsonObject message = new JsonObject();
        message.addProperty("error", "Not joined on `" + channel + "` channel");

        return message;
    }
}