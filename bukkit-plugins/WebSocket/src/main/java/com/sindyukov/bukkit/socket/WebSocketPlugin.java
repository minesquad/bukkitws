package com.sindyukov.bukkit.socket;

import java.io.IOException;
import java.util.Collection;
import java.util.concurrent.Executors;

import com.sindyukov.bukkit.socket.channels.ServerChannel;
import com.sindyukov.bukkit.socket.channels.TestChannel;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Плагин WebSocket сервера
 */
public class WebSocketPlugin extends JavaPlugin {

    private final PlayerListener playerListener = new PlayerListener(this);
    private WebSocketServer socket;
    private TestChannel testChannel = new TestChannel();
    private ServerChannel serverChannel = new ServerChannel();

    /**
     * Конструктор
     *
     * @throws IOException
     */
    public WebSocketPlugin() throws IOException {
        socket = new WebSocketServer(this, 9999);
        socket.registerChannel(testChannel);
        socket.registerChannel(serverChannel);
    }

    /**
     * Активация плагина
     */
    @Override
    public void onEnable() {

        // Регистрируем PlayerListener
        PluginManager pm = getServer().getPluginManager();
        pm.registerEvents(playerListener, this);

        // Запускаем WebSocket сервер
        Executors.newSingleThreadExecutor().execute(() -> {
            socket.run();
            getLogger().info("run ChatServer");
        });
    }

    /**
     * Деактивация плагина
     */
    @Override
    public void onDisable() {

        // Останавливаем WebSocket сервер
        try {
            socket.stop();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    void addOnlinePlayer(Player player) {
        Collection<? extends Player> onlinePlayers = Bukkit.getOnlinePlayers();
        serverChannel.broadcast(onlinePlayers.toString());
    }

    void removeOnlinePlayer(Player player) {
        Collection<? extends Player> onlinePlayers = Bukkit.getOnlinePlayers();
        serverChannel.broadcast(onlinePlayers.toString());
    }
}
