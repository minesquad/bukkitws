package com.github.minesquad.bukkit.minecraft;

import com.github.minesquad.bukkit.gson.PlayerSerializer;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.bukkit.Bukkit;

public class ServerTools {

    public static JsonObject getOnlineJsonObject()
    {
        JsonArray online = new JsonArray();
        Bukkit.getServer().getOnlinePlayers().forEach((player) -> {
            online.add(PlayerSerializer.serialize(player));
        });
        JsonObject response = new JsonObject();
        response.add("online", online);

        return response;
    }

}
