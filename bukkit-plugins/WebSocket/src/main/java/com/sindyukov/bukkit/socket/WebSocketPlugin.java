package com.sindyukov.bukkit.socket;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeoutException;

import org.bukkit.entity.Player;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Sample plugin for Bukkit
 *
 * @author Dinnerbone
 */
public class WebSocketPlugin extends JavaPlugin {

    private final PlayerListener playerListener = new PlayerListener(this);
    private ChatServer chat;

    public WebSocketPlugin() throws IOException, TimeoutException {
        chat  = new ChatServer(9999);
    }

    @Override
    public void onEnable() {
        PluginManager pm = getServer().getPluginManager();
        pm.registerEvents(playerListener, this);

        Executors.newSingleThreadExecutor().execute(() -> {
            chat.run();
            getLogger().info("run ChatServer");
        });
    }

    @Override
    public void onDisable() {
        try {
            chat.stop();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void addOnlinePlayer(Player player) {
        getLogger().info(player.getName() + " join");
        chat.broadcast(player.getName() + " join");
    }

    public void removeOnlinePlayer(Player player) {
        chat.broadcast(player.getName() + " leave");
    }
}
