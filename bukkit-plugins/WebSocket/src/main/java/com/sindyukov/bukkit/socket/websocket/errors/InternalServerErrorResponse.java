package com.sindyukov.bukkit.socket.websocket.errors;

import com.google.gson.JsonObject;

public class InternalServerErrorResponse extends ErrorResponse {
    @Override
    public JsonObject getMessage() {
        JsonObject message = new JsonObject();
        message.addProperty("error", "Internal server errro");

        return message;
    }
}
