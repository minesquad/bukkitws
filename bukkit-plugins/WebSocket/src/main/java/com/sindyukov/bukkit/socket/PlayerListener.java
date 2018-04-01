package com.sindyukov.bukkit.socket;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerQuitEvent;

public class PlayerListener implements Listener {

    private final WebSocketPlugin plugin;

    PlayerListener(WebSocketPlugin instance) {
        plugin = instance;
    }

    /**
     * Игрок зашел в игру
     *
     * @param event PlayerJoinEvent
     */
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        plugin.addOnlinePlayer(event.getPlayer());
    }

    /**
     * Игрок вышел из игры
     *
     * @param event PlayerQuitEvent
     */
    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        plugin.removeOnlinePlayer(event.getPlayer());
    }

}
