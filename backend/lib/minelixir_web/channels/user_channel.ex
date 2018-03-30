defmodule MinelixirWeb.Channels.UserChannel do

  use Phoenix.Channel

  require Logger

  def join("users", _message, socket) do
    {:ok, socket}
  end

end