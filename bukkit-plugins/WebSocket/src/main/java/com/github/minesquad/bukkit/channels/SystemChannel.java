package com.github.minesquad.bukkit.channels;

import com.github.minesquad.bukkit.WebSocketPlugin;
import com.github.minesquad.bukkit.websocket.Channel;
import com.github.minesquad.bukkit.websocket.ChannelAction;
import com.github.minesquad.bukkit.websocket.ChannelEvent;

public class SystemChannel extends Channel {

    private final WebSocketPlugin plugin;

    public SystemChannel(WebSocketPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public String getName() {
        return "system";
    }

    @ChannelAction(event = "status")
    public void status(ChannelEvent event) {
        event.response(plugin.system.status());
    }

}
