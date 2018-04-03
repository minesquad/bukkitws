package com.github.minesquad.bukkit.workers;

import com.github.minesquad.bukkit.WebSocketPlugin;
import com.github.minesquad.bukkit.minecraft.ServerTools;

import java.util.TimerTask;

public class MinecraftWorker extends TimerTask {
    private final WebSocketPlugin plugin;

    public MinecraftWorker(WebSocketPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public void run() {
        plugin.socket.broadcast("minecraft", "online", ServerTools.getOnlineJsonObject());
        plugin.socket.broadcast("minecraft", "events", plugin.eventsPool.toJsonObject());
    }

}
