package com.github.minesquad.bukkit.channels;

import com.github.minesquad.bukkit.websocket.Channel;

public class ServerChannel extends Channel {

    @Override
    public String getName() {
        return "server";
    }
}
