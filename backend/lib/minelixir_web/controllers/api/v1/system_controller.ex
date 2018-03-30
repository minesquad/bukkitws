defmodule MinelixirWeb.Controllers.Api.V1.SystemController do
  use MinelixirWeb, :controller

  alias Minelixir.Tools.System

  def index(conn, _params) do
    conn
    |> json(System.summary())
  end

end
