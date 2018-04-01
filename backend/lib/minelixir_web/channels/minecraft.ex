defmodule MinelixirWeb.Channels.Minecraft do

  use Phoenix.Channel

  require Logger

  def join("minecraft", _message, socket) do
    {:ok, socket}
  end

end