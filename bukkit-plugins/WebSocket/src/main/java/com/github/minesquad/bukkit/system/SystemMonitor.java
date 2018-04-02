package com.github.minesquad.bukkit.system;

public interface SystemMonitor {

    public CpuInfo getCpuInfo();
    public MemoryInfo getRamInfo();
    public MemoryInfo getDiskInfo();

}


//defmodule Minelixir.Tools.System do
//
//  def exec(cmd) do
//    cmd
//    |> String.to_charlist
//    |> :os.cmd
//    |> List.to_string()
//  end
//
//  defmodule Mac do
//
//    def get_os do
//      :darwin
//    end
//
//    def get_cpu_info do
//      cores = "sysctl -n hw.ncpu"
//              |> Minelixir.Tools.System.exec
//              |> Integer.parse
//              |> elem(0)
//
//      usage = "sysctl -n vm.loadavg"
//              |> Minelixir.Tools.System.exec
//              |> (&(Regex.run(~r/\{\s(.*?)\s.*?\s.*?\s\}/, &1))).()
//              |> Enum.at(1)
//              |> Float.parse
//              |> elem(0)
//              |> Kernel.*(100)
//              |> Kernel./(cores)
//              |> Float.round(2)
//
//      uptime = "sysctl kern.boottime"
//               |> Minelixir.Tools.System.exec
//               |> (&(Regex.run(~r/kern.boottime: \{ sec = (\d+), usec = \d+ \}.*/, &1))).()
//               |> Enum.at(1)
//               |> Integer.parse
//               |> elem(0)
//
//      %{
//        cores: cores,
//        usage: usage,
//        uptime: uptime,
//      }
//    end
//
//    def get_ram_info do
//      memsize = "sysctl hw.memsize"
//                |> Minelixir.Tools.System.exec
//                |> (&(Regex.run(~r/hw\.memsize\:\s(\d+).*/, &1))).()
//                |> Enum.at(1)
//                |> Integer.parse
//                |> elem(0)
//                |> Kernel./(1024)
//                |> Kernel./(1024)
//
//      top = "top -l 1 | grep -E \"^CPU|^Phys\""
//            |> Minelixir.Tools.System.exec
//
//      [_, used, wired, unused] = case Regex.run(~r/PhysMem\:\s(\d+)M\sused\s\((\d+)M\swired\),\s(\d+)M\sunused\..*?/, top) do
//        [phys, used, wired, unused] -> [phys, used, wired, unused]
//        _ -> [0, 0, 0, 0]
//      end
//
//      used = elem(Integer.parse(used), 0)
//      wired = elem(Integer.parse(wired), 0)
//      unused = elem(Integer.parse(unused), 0)
//
//      %{
//        total: unused + used,
//        free: wired + unused,
//        used: used - wired,
//        usage: Float.round((used - wired) / (unused + used) * 100, 2),
//      }
//    end
//
//    def get_disk_info do
//      [_, _, used, free, usage, _, _, _, _] = "df -m | grep /$"
//                                              |> Minelixir.Tools.System.exec
//                                              |> String.trim
//                                              |> String.replace(~r/\s+/, " ")
//                                              |> String.split(" ")
//
//      used = elem(Integer.parse(used), 0)
//      free = elem(Integer.parse(free), 0)
//      usage = elem(Float.parse(usage), 0)
//
//      %{
//        total: free + used,
//        free: free,
//        used: used,
//        usage: usage,
//      }
//    end
//  end
//
//  defmodule Linux do
//    def get_os do
//      :linux
//
//    end
//
//    defp exec(cmd) do
//      cmd
//      |> String.to_charlist
//      |> :os.cmd
//      |> List.to_string()
//    end
//
//    def get_cpu_info do
//      cores = "cat /proc/cpuinfo"
//              |> Minelixir.Tools.System.exec()
//              |> (&(Regex.run(~r/cpu\scores\s+:\s(\d+)/, &1))).()
//              |> Enum.at(1)
//              |> Integer.parse
//              |> elem(0)
//
//      usage = "cat /proc/loadavg"
//              |> Minelixir.Tools.System.exec
//              |> (&(Regex.run(~r/(.*?)\s.*/, &1))).()
//              |> Enum.at(1)
//              |> Float.parse
//              |> elem(0)
//              |> Kernel.*(100)
//              |> Kernel./(cores)
//              |> Float.round(2)
//
//      uptime = "cut -d. -f1 /proc/uptime"
//               |> Minelixir.Tools.System.exec
//               |> Integer.parse
//               |> elem(0)
//
//      %{
//        cores: cores,
//        usage: usage,
//        uptime: uptime,
//      }
//    end
//
//    def get_ram_info do
//      meminfo = "awk '$3==\"kB\"{$2=$2/1024;$3=\"\"} 1' /proc/meminfo"
//                |> Minelixir.Tools.System.exec
//                |> String.trim
//                |> String.split("\n")
//                |> Enum.map(&String.trim/1)
//                |> Enum.map(
//                     fn line ->
//                       [key, value] = line
//                                      |> String.split(":")
//
//                       key = key
//                             |> String.trim
//                             |> String.downcase
//                             |> String.to_atom
//
//                       value = value
//                               |> String.trim
//                               |> Float.parse
//                               |> elem(0)
//
//                       {key, value}
//                     end
//                   )
//                |> Map.new
//
//      used = meminfo.memtotal - meminfo.memfree - meminfo.cached;
//
//      %{
//        total: meminfo.memtotal,
//        free: meminfo.memtotal - used,
//        used: used,
//        usage: Float.round(used / meminfo.memtotal * 100, 2),
//      }
//    end
//
//    def get_disk_info do
//      [_, _, used, free, usage, _] = "df -mP | grep /$"
//                                     |> Minelixir.Tools.System.exec
//                                     |> String.trim
//                                     |> String.replace(~r/\s+/, " ")
//                                     |> String.split(" ")
//
//      used = elem(Integer.parse(used), 0)
//      free = elem(Integer.parse(free), 0)
//      usage = elem(Float.parse(usage), 0)
//
//      %{
//        total: free + used,
//        free: free,
//        used: used,
//        usage: usage,
//      }
//    end
//
//  end
//
//  defp implementation do
//    case :os.type do
//      {:unix, :darwin} -> Mac
//      {:unix, :linux} -> Linux
//    end
//  end
//
//  def get_os, do: apply(implementation(), :get_os, [])
//  def get_cpu_info, do: apply(implementation(), :get_cpu_info, [])
//  def get_ram_info, do: apply(implementation(), :get_ram_info, [])
//  def get_disk_info, do: apply(implementation(), :get_disk_info, [])
//
//  def summary do
//    %{
//      os: get_os,
//      cpu: get_cpu_info,
//      ram: get_ram_info,
//      disk: get_disk_info,
//    }
//  end
//
//end