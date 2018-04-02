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

    private OperatingSystemMXBean os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
    private RuntimeMXBean runtime = (RuntimeMXBean) ManagementFactory.getRuntimeMXBean();
    private File store = new File("/");

    public SystemWorker(WebSocketPlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public void run() {
        try {
            JsonObject cpu = new JsonObject();
            cpu.addProperty("arch", os.getArch());
            cpu.addProperty("cores", os.getAvailableProcessors());
            cpu.addProperty("usage", os.getSystemLoadAverage());
            cpu.addProperty("uptime", runtime.getUptime());

            JsonObject ram = new JsonObject();
            ram.addProperty("total", os.getTotalPhysicalMemorySize());
            ram.addProperty("free", os.getFreePhysicalMemorySize());

            JsonObject swap = new JsonObject();
            swap.addProperty("total", os.getTotalSwapSpaceSize());
            swap.addProperty("free", os.getFreeSwapSpaceSize());

            JsonObject disk = new JsonObject();
            disk.addProperty("total", store.getTotalSpace());
            disk.addProperty("free", store.getFreeSpace());

            JsonObject data = new JsonObject();
            data.add("cpu", cpu);
            data.add("ram", ram);
            data.add("swap", swap);
            data.add("disk", disk);
            plugin.socket.broadcast("system", "status", data);
        } catch (Exception ex) {
            System.out.println("SystemWorker error: " + ex.getClass());
            ex.printStackTrace();
        }
    }

}
