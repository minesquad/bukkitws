package com.github.minesquad.bukkit.system;

import java.io.BufferedReader;
import java.io.InputStreamReader;

abstract public class UnixSystemMonitor implements SystemMonitor {

    public String exec(String command) {
        StringBuilder output = new StringBuilder();

        Process p;
        try {
            p = Runtime.getRuntime().exec(command);
            p.waitFor();
            BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));

            String line;
            while ((line = reader.readLine())!= null) {
                output.append(line).append("\n");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return output.toString();
    }

}
