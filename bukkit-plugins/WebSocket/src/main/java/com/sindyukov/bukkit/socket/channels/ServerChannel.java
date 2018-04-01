package com.sindyukov.bukkit.socket.channels;

import com.sindyukov.bukkit.socket.websocket.Channel;

public class ServerChannel extends Channel {

    @Override
    public String getName() {
        return "server";
    }
}
