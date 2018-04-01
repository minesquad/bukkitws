package com.sindyukov.bukkit.socket.websocket.errors;

import com.google.gson.JsonObject;

public class EventNotFoundErrorResponse extends ErrorResponse {
    private String channel;
    private String event;

    public EventNotFoundErrorResponse(String channel, String event) {
        this.channel = channel;
        this.event = event;
    }

    @Override
    public JsonObject getMessage() {
        JsonObject message = new JsonObject();
        message.addProperty("error", "Event `" + event + "` not found in `" + channel + "` channel");

        return message;
    }
}
