package com.github.minesquad.bukkit;

import java.io.IOException;
import java.util.concurrent.Executors;

import com.github.minesquad.bukkit.listeners.PlayerListener;
import com.github.minesquad.bukkit.channels.MinecraftChannel;
import com.github.minesquad.bukkit.channels.SystemChannel;
import com.github.minesquad.bukkit.minecraft.EventsPool;
import com.github.minesquad.bukkit.system.SystemStatus;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Плагин WebSocket сервера
 */
public class WebSocketPlugin extends JavaPlugin {

    private final PlayerListener playerListener = new PlayerListener(this);
    public WebSocketServer socket;
    public EventsPool eventsPool = new EventsPool(50); // Todo move 50 to config
    public SystemStatus system = new SystemStatus();

    /**
     * Конструктор
     */
    public WebSocketPlugin() {
        socket = new WebSocketServer(this, 9999);
        socket.registerChannel(new MinecraftChannel(this));
        socket.registerChannel(new SystemChannel(this));
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
