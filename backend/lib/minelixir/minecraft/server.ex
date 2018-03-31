defmodule Minelixir.Minecraft.Server do
  require Logger

  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  def init(_) do
    {:ok, %{}}
  end

  def event(name, data) do
    GenServer.cast(__MODULE__, {name, data})
  end

  def status() do
    GenServer.call(__MODULE__, :status)
  end

  def handle_cast({:join, data}, state) do
    {:noreply, Map.put(state, :online, Map.get(data, "online"))}
  end

  def handle_cast({:leave, data}, state) do
    {:noreply, Map.put(state, :online, Map.get(data, "online"))}
  end

  def handle_cast({:online, data}, state) do
    {:noreply, Map.put(state, :online, Map.get(data, "online"))}
  end

  def handle_cast({:event, data}, state) do
    Logger.error("Unknown event")
  end

  def handle_call(:status, _from, state) do
    {:reply, state, state}
  end

end