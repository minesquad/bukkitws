package com.github.minesquad.bukkit.minecraft;

import com.github.minesquad.bukkit.gson.PlayerSerializer;
import com.google.gson.JsonObject;
import org.bukkit.entity.Player;

public class MinecraftEvent {

    private String type;
    private Player player;
    public JsonObject data = new JsonObject();

    public MinecraftEvent(String type, Player player) {
        this.type = type;
        this.player = player;
    }

    public JsonObject toJsonObject() {
        JsonObject event = new JsonObject();
        event.addProperty("type", type);
        event.add("player", PlayerSerializer.serialize(player));
        event.add("data", data);

        return event;
    }

}
