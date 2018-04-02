package com.sindyukov.bukkit.socket.system;

public class MacSystemMonitor extends UnixSystemMonitor {

    @Override
    public CpuInfo getCpuInfo() {
        return null;
    }

    @Override
    public MemoryInfo getRamInfo() {
        return null;
    }

    @Override
    public MemoryInfo getDiskInfo() {
        return null;
    }


}
