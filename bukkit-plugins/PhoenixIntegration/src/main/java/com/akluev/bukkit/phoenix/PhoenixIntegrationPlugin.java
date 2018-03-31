
package com.akluev.bukkit.phoenix;

import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import org.bukkit.entity.Player;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Sample plugin for Bukkit
 *
 * @author Dinnerbone
 */
public class PhoenixIntegrationPlugin extends JavaPlugin {

    private final PlayerListener playerListener = new PlayerListener(this);
    private final HashMap<String, Player> online = new LinkedHashMap<>();
    private final RabbitMQ rabbit = new RabbitMQ(this);
    public final Gson gson = new GsonBuilder().create();

    public PhoenixIntegrationPlugin() throws IOException, TimeoutException {
    }

    @Override
    public void onDisable() {
        // TODO: Place any custom disable code here

        // NOTE: All registered events are automatically unregistered when a plugin is disabled

        // EXAMPLE: Custom code, here we just output some info so we can check all is well
        getLogger().info("Goodbye world!");
        rabbit.close();
    }

    @Override
    public void onEnable() {
        // TODO: Place any custom enable code here including the registration of any events

        // Register our events
        PluginManager pm = getServer().getPluginManager();
        pm.registerEvents(playerListener, this);

        // EXAMPLE: Custom code, here we just output some info so we can check all is well
        getLogger().info("PhoenixIntegrationPlugin enabled");
        try {
            rabbit.connect();
            getLogger().info("PhoenixIntegrationPlugin RabbitMQ connected");
        } catch (Exception e) {
            e.printStackTrace();
        }

        pushOnlineEvent();
    }

    public void addOnlinePlayer(Player player) {
        getLogger().info("PhoenixIntegrationPlugin put join");
        online.put(player.getName(), player);
        getLogger().info("PhoenixIntegrationPlugin publish join");
        pushUserEvent("join", player);
    }

    public void removeOnlinePlayer(Player player) {
        online.remove(player.getName());
        getLogger().info("PhoenixIntegrationPlugin publish leave");
        pushUserEvent("leave", player);
    }

    private void pushUserEvent(String eventName, Player player) {
        try {
            Map<String, Object> event = new LinkedHashMap<>();
            event.put("event", eventName);
            event.put("player", player.getName());
            event.put("online", online.keySet().toArray());
            rabbit.publish(gson.toJson(event));
        } catch (IOException e) {
            e.printStackTrace();
            getLogger().warning("can't push");
        }
    }

    private void pushOnlineEvent() {
        try {
            Map<String, Object> response = new LinkedHashMap<>();
            response.put("event", "online");
            response.put("online", online.keySet().toArray());
            rabbit.publish(gson.toJson(response));
        } catch (IOException e) {
            e.printStackTrace();
            getLogger().warning("can't push");
        }
    }

    public void handleIncomeEvent(String event) {
        switch (event) {
            case "online":
                pushOnlineEvent();
                break;
            default:
                break;
        }
    }
}
