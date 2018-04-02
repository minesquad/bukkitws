package com.github.minesquad.bukkit.websocket.errors;

import com.google.gson.JsonObject;

public class BadMessageErrorResponse extends ErrorResponse {

    @Override
    public JsonObject getMessage() {
        JsonObject message = new JsonObject();
        message.addProperty("error", "Bad message format");

        return message;
    }
}
