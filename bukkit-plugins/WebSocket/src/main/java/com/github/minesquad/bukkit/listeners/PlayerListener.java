package com.github.minesquad.bukkit.listeners;

import com.github.minesquad.bukkit.WebSocketPlugin;
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
        this.broadcastOnlineEvent("join");
    }

    /**
     * Игрок вышел из игры
     *
     * @param event PlayerQuitEvent
     */
    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        this.broadcastOnlineEvent("leave");
    }

    private void broadcastOnlineEvent(String event) {
        Collection<? extends Player> onlinePlayers = Bukkit.getOnlinePlayers();

//        onlinePlayers.forEach(player -> {
//            System.out.println(player);
//        });


        JsonObject data = new JsonObject();
        data.addProperty("online", onlinePlayers.toString());

        plugin.socket.broadcast("server", event, data);
    }

}
