defmodule MinelixirWeb.Channels.Server do

  use Phoenix.Channel

  require Logger

  def join("server", _message, socket) do
    {:ok, socket}
  end

end