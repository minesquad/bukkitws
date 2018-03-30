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

end