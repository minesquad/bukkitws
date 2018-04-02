package com.sindyukov.bukkit.socket;

import java.io.IOException;
import java.util.Collection;
import java.util.Timer;
import java.util.concurrent.Executors;

import com.google.gson.JsonObject;
import com.sindyukov.bukkit.socket.channels.ServerChannel;
import com.sindyukov.bukkit.socket.channels.SystemChannel;
import com.sindyukov.bukkit.socket.channels.TestChannel;
import com.sindyukov.bukkit.socket.workers.SystemWorker;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Плагин WebSocket сервера
 */
public class WebSocketPlugin extends JavaPlugin {

    private final PlayerListener playerListener = new PlayerListener(this);
    public WebSocketServer socket;
    private SystemWorker systemWorker = new SystemWorker(this);

    /**
     * Конструктор
     */
    public WebSocketPlugin()  {
        socket = new WebSocketServer(this, 9999);
        socket.registerChannel(new TestChannel());
        socket.registerChannel(new ServerChannel());
        socket.registerChannel(new SystemChannel());
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

        // Запускаем WebSocket сервер
        Executors.newSingleThreadExecutor().execute(() -> {
            Timer timer = new Timer(true);
            timer.scheduleAtFixedRate(systemWorker, 0, 1000);
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
        this.broadcastOnlineEvent("join");
    }

    void removeOnlinePlayer(Player player) {
        this.broadcastOnlineEvent("leave");
    }

    private void broadcastOnlineEvent(String event) {
        Collection<? extends Player> onlinePlayers = Bukkit.getOnlinePlayers();

        JsonObject data = new JsonObject();
        data.addProperty("online", onlinePlayers.toString());

        socket.broadcast("server", event, data);
    }
}
