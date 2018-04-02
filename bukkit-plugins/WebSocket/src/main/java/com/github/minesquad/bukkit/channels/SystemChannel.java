package com.github.minesquad.bukkit.channels;

import com.github.minesquad.bukkit.websocket.Channel;

public class SystemChannel extends Channel {

    @Override
    public String getName() {
        return "system";
    }
}
