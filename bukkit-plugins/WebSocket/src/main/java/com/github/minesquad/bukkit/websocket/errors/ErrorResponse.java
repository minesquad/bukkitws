package com.github.minesquad.bukkit.websocket.errors;

import com.github.minesquad.bukkit.websocket.ResponseInterface;

abstract public class ErrorResponse implements ResponseInterface {

    @Override
    public boolean getSuccess() {
        return false;
    }
}
