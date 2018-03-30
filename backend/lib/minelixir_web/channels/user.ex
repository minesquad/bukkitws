defmodule MinelixirWeb.Channels.User do

  use Phoenix.Channel

  require Logger

  alias Minelixir.Tools.User

  def join("users", _message, socket) do
    {:ok, socket}
  end

  def handle_in("list", _message, socket) do
    {:reply, {:ok, %{users: User.list!()}}, socket}
  end

  def handle_in("stats", message, socket) do
    uuid = message
           |> Map.get("uuid")
    {:reply, {:ok, User.stats!(uuid)}, socket}
  end

  def handle_in("advancements", message, socket) do
    uuid = message
           |> Map.get("uuid")
    {:reply, {:ok, User.advancements!(uuid)}, socket}
  end

end