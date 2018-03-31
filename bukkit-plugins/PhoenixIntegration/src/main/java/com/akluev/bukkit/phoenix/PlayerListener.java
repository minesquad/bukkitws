
package com.akluev.bukkit.phoenix;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerQuitEvent;

/**
 * Handle events for all Player related events
 * @author Dinnerbone
 */
public class PlayerListener implements Listener {
    private final PhoenixIntegrationPlugin plugin;

    public PlayerListener(PhoenixIntegrationPlugin instance) {
        plugin = instance;
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        plugin.addOnlinePlayer(event.getPlayer());
    }

    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        plugin.removeOnlinePlayer(event.getPlayer());
    }

}
