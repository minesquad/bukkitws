package com.github.minesquad.bukkit.workers;

import com.github.minesquad.bukkit.WebSocketPlugin;
import com.google.gson.JsonObject;
import com.sun.management.OperatingSystemMXBean;

import java.io.File;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.util.TimerTask;

public class SystemWorker extends TimerTask {
    private final WebSocketPlugin plugin;

    public SystemWorker(WebSocketPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public void run() {
        try {
            plugin.socket.broadcast("system", "status", plugin.system.status());
        } catch (Exception ex) {
            System.out.println("SystemWorker error: " + ex.getClass());
            ex.printStackTrace();
        }
    }

}
