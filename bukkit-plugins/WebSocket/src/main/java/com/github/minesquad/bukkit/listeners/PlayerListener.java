package com.github.minesquad.bukkit.listeners;

import com.github.minesquad.bukkit.WebSocketPlugin;
import com.github.minesquad.bukkit.minecraft.MinecraftEvent;
import com.github.minesquad.bukkit.minecraft.ServerTools;
import com.google.gson.JsonObject;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerQuitEvent;

import java.util.Collection;

public class PlayerListener implements Listener {

    private final WebSocketPlugin plugin;

    public PlayerListener(WebSocketPlugin instance) {
        plugin = instance;
    }

    /**
     * Игрок зашел в игру
     *
     * @param event PlayerJoinEvent
     */
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        plugin.eventsPool.push(new MinecraftEvent("PlayerJoin", event.getPlayer()));
        this.broadcastOnlineEvent();
    }

    /**
     * Игрок вышел из игры
     *
     * @param event PlayerQuitEvent
     */
    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        plugin.eventsPool.push(new MinecraftEvent("PlayerQuit", event.getPlayer()));
        this.broadcastOnlineEvent();
    }

    private void broadcastOnlineEvent() {
        plugin.socket.broadcast("minecraft", "online", ServerTools.getOnlineJsonObject());
        plugin.socket.broadcast("minecraft", "events", plugin.eventsPool.toJsonObject());
    }

}
