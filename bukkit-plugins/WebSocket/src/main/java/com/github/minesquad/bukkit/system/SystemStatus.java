package com.github.minesquad.bukkit.system;

import com.google.gson.JsonObject;
import com.sun.management.OperatingSystemMXBean;

import java.io.File;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;

public class SystemStatus {
    private OperatingSystemMXBean os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
    private RuntimeMXBean runtime = (RuntimeMXBean) ManagementFactory.getRuntimeMXBean();
    private File store = new File("/");

    public JsonObject status() {
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

        JsonObject status = new JsonObject();
        status.add("cpu", cpu);
        status.add("ram", ram);
        status.add("swap", swap);
        status.add("disk", disk);

        return status;
    }
}
