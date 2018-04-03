package com.github.minesquad.bukkit.gson;

import com.google.gson.JsonObject;
import org.bukkit.entity.Player;

public class PlayerSerializer {

    public static JsonObject serialize(Player player) {
        JsonObject object = new JsonObject();
        object.addProperty("id", player.getUniqueId().toString());
        object.addProperty("name", player.getDisplayName());
        object.addProperty("level", player.getLevel());
        object.addProperty("xp", player.getExp());
        object.addProperty("health", player.getHealth());
        object.addProperty("healthScale", player.getHealthScale());
        object.addProperty("food", player.getFoodLevel());
        object.addProperty("world", player.getWorld().getName());

        return object;
    }

}
