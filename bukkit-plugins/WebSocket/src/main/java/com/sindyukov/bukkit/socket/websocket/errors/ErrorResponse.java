package com.sindyukov.bukkit.socket.websocket.errors;

import com.sindyukov.bukkit.socket.websocket.ResponseInterface;

abstract public class ErrorResponse implements ResponseInterface {

    @Override
    public boolean getSuccess() {
        return false;
    }
}
