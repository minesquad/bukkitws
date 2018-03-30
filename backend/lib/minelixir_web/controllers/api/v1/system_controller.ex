defmodule MinelixirWeb.Controllers.Api.V1.SystemController do
  use MinelixirWeb, :controller

  alias Minelixir.Tools.SystemTool

  def index(conn, _params) do
    conn
    |> json(SystemTool.summary())
  end

end
