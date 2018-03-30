defmodule Minelixir.Tools.SystemTool do

  def exec(cmd) do
    cmd
    |> String.to_charlist
    |> :os.cmd
    |> List.to_string()
  end

  defmodule Mac do

    def get_os do
      :darwin
    end

    def get_cpu_info do
      cores = "sysctl -n hw.ncpu"
              |> Minelixir.Tools.SystemTool.exec
              |> Integer.parse
              |> elem(0)

      usage = "sysctl -n vm.loadavg"
              |> Minelixir.Tools.SystemTool.exec
              |> (&(Regex.run(~r/\{\s(.*?)\s.*?\s.*?\s\}/, &1))).()
              |> Enum.at(1)
              |> Float.parse
              |> elem(0)
              |> Kernel.*(100)
              |> Kernel./(cores)
              |> Float.round(2)

      uptime = "sysctl kern.boottime"
               |> Minelixir.Tools.SystemTool.exec
               |> (&(Regex.run(~r/kern.boottime: \{ sec = (\d+), usec = 836309 \}.*/, &1))).()
               |> Enum.at(1)
               |> Integer.parse
               |> elem(0)

      %{
        cores: cores,
        usage: usage,
        uptime: uptime,
      }
    end

    def get_ram_info do
      memsize = "sysctl hw.memsize"
                |> Minelixir.Tools.SystemTool.exec
                |> (&(Regex.run(~r/hw\.memsize\:\s(\d+).*/, &1))).()
                |> Enum.at(1)
                |> Integer.parse
                |> elem(0)
                |> Kernel./(1024)
                |> Kernel./(1024)

      top = "top -l 1 | grep -E \"^CPU|^Phys\""
            |> Minelixir.Tools.SystemTool.exec

      [_, used, wired, unused] = Regex.run(~r/PhysMem\:\s(\d+)M\sused\s\((\d+)M\swired\),\s(\d+)M\sunused\..*?/, top)

      used = elem(Integer.parse(used), 0)
      wired = elem(Integer.parse(wired), 0)
      unused = elem(Integer.parse(unused), 0)

      %{
        total: unused + used,
        free: wired + unused,
        used: used - wired,
        usage: Float.round((used - wired) / (unused + used) * 100, 2),
      }
    end

    def get_disk_info do
      [_, _, used, free, usage, _, _, _, _] = "df -m | grep /$"
                                        |> Minelixir.Tools.SystemTool.exec
                                        |> String.trim
                                        |> String.replace(~r/\s+/, " ")
                                        |> String.split(" ")

      used = elem(Integer.parse(used), 0) / 1024
      free = elem(Integer.parse(free), 0) / 1024
      usage = elem(Float.parse(usage), 0)

      %{
        total: free + used,
        free: free,
        used: used,
        usage: usage,
      }
    end
  end

  defmodule Linux do
    def get_os do
      :linux

    end

    defp exec(cmd) do
      cmd
      |> String.to_charlist
      |> :os.cmd
      |> List.to_string()
    end

  end

  defp implementation do
    case :os.type do
      {:unix, :darwin} -> Mac
      {:unix, :linux} -> Linux
    end
  end

  def get_os, do: apply(implementation(), :get_os, [])
  def get_cpu_info, do: apply(implementation(), :get_cpu_info, [])
  def get_ram_info, do: apply(implementation(), :get_ram_info, [])
  def get_disk_info, do: apply(implementation(), :get_disk_info, [])

end