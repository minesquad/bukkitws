package com.github.minesquad.bukkit.channels;

import com.github.minesquad.bukkit.websocket.Channel;

public class MinecraftChannel extends Channel {

    @Override
    public String getName() {
        return "minecraft";
    }
}
