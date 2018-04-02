package com.github.minesquad.bukkit;

import java.io.IOException;
import java.util.concurrent.Executors;

import com.github.minesquad.bukkit.listeners.PlayerListener;
import com.github.minesquad.bukkit.channels.ServerChannel;
import com.github.minesquad.bukkit.channels.SystemChannel;
import com.github.minesquad.bukkit.channels.TestChannel;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Плагин WebSocket сервера
 */
public class WebSocketPlugin extends JavaPlugin {

    private final PlayerListener playerListener = new PlayerListener(this);
    public WebSocketServer socket;

    /**
     * Конструктор
     */
    public WebSocketPlugin() {
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
}
