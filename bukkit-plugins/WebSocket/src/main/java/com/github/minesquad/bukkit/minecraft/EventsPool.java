package com.github.minesquad.bukkit.minecraft;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.ArrayList;

public class EventsPool {

    private final ArrayList<MinecraftEvent> list;
    private int limit;

    public EventsPool(int limit) {
        //noinspection unchecked
        this.list = new ArrayList<MinecraftEvent>();
        this.limit = limit;
    }

    public void push(MinecraftEvent event) {
        if (list.size() == this.limit) {
            pop();
        }

        list.add(event);
    }

    public void pop() {
        list.remove(0);
    }

    public int size() {
        return this.list.size();
    }

    public int limit() {
        return this.limit();
    }

    public String toString() {
        return this.list.toString();
    }

    public void flush() {
        this.list.clear();
    }

    public JsonObject toJsonObject() {
        JsonObject data = new JsonObject();
        JsonArray events = new JsonArray();
        //noinspection unchecked
        ArrayList<MinecraftEvent> copy = (ArrayList<MinecraftEvent>) this.list.clone();
        for (MinecraftEvent aCopy : copy) {
            events.add(aCopy.toJsonObject());
        }

        data.add("events", events);

        return data;
    }
}
