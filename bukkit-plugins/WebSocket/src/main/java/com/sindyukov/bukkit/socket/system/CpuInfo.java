package com.sindyukov.bukkit.socket.system;

import com.google.gson.JsonObject;

public class CpuInfo {

    private int cores;
    private int uptime;
    private float load;

    public CpuInfo(int cores, int uptime, float load) {
        this.cores = cores;
        this.uptime = uptime;
        this.load = load;
    }

    public int getCores() {
        return cores;
    }

    public int getUptime() {
        return uptime;
    }

    public float getLoad() {
        return load;
    }

    public JsonObject toJsonObejct() {
        JsonObject object = new JsonObject();
        object.addProperty("cores", getCores());
        object.addProperty("load", getLoad());
        object.addProperty("uptime", getUptime());

        return object;
    }

}
