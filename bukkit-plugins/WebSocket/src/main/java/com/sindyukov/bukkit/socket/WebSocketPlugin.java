package com.sindyukov.bukkit.socket;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.atmosphere.cpr.AtmosphereFramework;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Sample plugin for Bukkit
 *
 * @author Dinnerbone
 */
public class WebSocketPlugin extends JavaPlugin {

    public WebSocketPlugin() throws IOException, TimeoutException {
    }

    @Override
    public void onEnable() {
        AtmosphereFramework f = new AtmosphereFramework();
        f.init();

        getLogger().info("run AtmosphereFramework");

//        f.doCometSupport(AtmosphereRequest, AtmosphereResponse);
    }

    @Override
    public void onDisable() {


    }



}
