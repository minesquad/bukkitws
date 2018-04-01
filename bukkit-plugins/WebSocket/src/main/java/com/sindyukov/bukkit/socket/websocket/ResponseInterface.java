package com.sindyukov.bukkit.socket.websocket;

import com.google.gson.JsonObject;

public interface ResponseInterface {

    public JsonObject getMessage();

    public boolean getSuccess();
}
