package com.github.minesquad.bukkit.workers;

import com.github.minesquad.bukkit.WebSocketPlugin;
import com.github.minesquad.bukkit.system.MacSystemMonitor;
import com.github.minesquad.bukkit.system.SystemMonitor;
import com.google.gson.JsonObject;

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
