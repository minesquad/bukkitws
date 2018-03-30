defmodule MinelixirWeb.Controllers.Api.V1.UserController do
  use MinelixirWeb, :controller
  alias Minelixir.Tools.User

  def list(conn, _params) do
    list = User.list()
    case list do
      {:ok, data} ->
        conn
        |> put_status(200)
        |> json(
             data
           )
      _ ->
        conn
        |> put_status(404)
        |> json(
             %{

             }
           )
    end
  end

  def stats(conn, params) do
    uuid = params
           |> Map.get("uuid")
    stats = User.stats(uuid)
    case stats do
      {:ok, data} ->
        conn
        |> put_status(200)
        |> json(
             data
           )
      _ ->
        conn
        |> put_status(404)
        |> json(
             %{

             }
           )
    end
  end

  def advancements(conn, params) do
    uuid = params
           |> Map.get("uuid")
    advancements = User.advancements(uuid)
    case advancements do
      {:ok, data} ->
        conn
        |> put_status(200)
        |> json(
             data
           )
      _ ->
        conn
        |> put_status(404)
        |> json(
             %{

             }
           )
    end
  end

end
