package com.github.minesquad.bukkit.channels;

import com.github.minesquad.bukkit.WebSocketPlugin;
import com.github.minesquad.bukkit.minecraft.ServerTools;
import com.github.minesquad.bukkit.websocket.Channel;
import com.github.minesquad.bukkit.websocket.ChannelAction;
import com.github.minesquad.bukkit.websocket.ChannelEvent;

public class MinecraftChannel extends Channel {

    private final WebSocketPlugin plugin;

    public MinecraftChannel(WebSocketPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public String getName() {
        return "minecraft";
    }

    @ChannelAction(event = "online")
    public void online(ChannelEvent event) {
        event.response(ServerTools.getOnlineJsonObject());
    }

    @ChannelAction(event = "events")
    public void events(ChannelEvent event) {
        event.response(plugin.eventsPool.toJsonObject());
    }

}
