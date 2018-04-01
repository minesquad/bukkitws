package com.sindyukov.bukkit.socket.websocket;

import com.google.gson.JsonObject;
import org.java_websocket.WebSocket;

import java.math.BigInteger;

public class ChannelEvent {

    private final BigInteger id;
    private final String name;
    private final WebSocket connection;
    private final JsonObject data;

    public ChannelEvent(BigInteger id, String name, WebSocket connection, JsonObject data) {
        this.id = id;
        this.name = name;
        this.connection = connection;
        this.data = data;
    }

    public String getName() {
        return name;
    }

    public JsonObject getData() {
        return data;
    }

    public void response(JsonObject response) {
        this.response(response, true);
    }

    public void response(ResponseInterface response) {
        this.response(response.getMessage(), response.getSuccess());
    }

    public void response(JsonObject response, Boolean success) {
        JsonObject resp = new JsonObject();
        resp.addProperty("id", this.id);
        resp.addProperty("status", success);
        resp.add("response", response);

        connection.send(resp.toString());
    }

    public WebSocket getConnection() {
        return connection;
    }
}
