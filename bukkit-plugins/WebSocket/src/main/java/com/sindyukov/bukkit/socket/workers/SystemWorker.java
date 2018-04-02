package com.sindyukov.bukkit.socket.workers;

import com.google.gson.JsonObject;
import com.sindyukov.bukkit.socket.WebSocketPlugin;
import com.sindyukov.bukkit.socket.system.MacSystemMonitor;
import com.sindyukov.bukkit.socket.system.SystemMonitor;

import java.util.TimerTask;

public class SystemWorker extends TimerTask {
    private final WebSocketPlugin plugin;
    private final SystemMonitor system = new MacSystemMonitor();

    public SystemWorker(WebSocketPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public void run() {
        try {
            JsonObject data = new JsonObject();
            data.addProperty("os", System.getProperty("os.name"));
            plugin.socket.broadcast("system", "cpu", data);
        } catch (Exception ex) {
            System.out.println("error running thread " + ex.getMessage());
        }
    }

}
