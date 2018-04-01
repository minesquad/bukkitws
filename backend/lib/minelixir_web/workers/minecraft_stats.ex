defmodule MinelixirWeb.Workers.MinecraftStats do
  use GenServer

  alias MinelixirWeb.Endpoint
  alias Minelixir.Minecraft.Server, as: MinecraftServer

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  def init(_) do
    {
      :ok,
      %{}
      |> work
      |> tick
    }
  end

  defp tick(state) do
    Process.send_after(self(), :tick, 1000)
    state
  end

  def handle_info(:tick, state) do
    {
      :noreply,
      state
      |> work
      |> tick
    }
  end

  def work(state) do
    Endpoint.broadcast! "minecraft", "stats", MinecraftServer.status()
    state
  end

end