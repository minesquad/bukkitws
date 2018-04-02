package com.sindyukov.bukkit.socket.channels;

import com.sindyukov.bukkit.socket.websocket.Channel;

public class SystemChannel extends Channel {

    @Override
    public String getName() {
        return "system";
    }
}
