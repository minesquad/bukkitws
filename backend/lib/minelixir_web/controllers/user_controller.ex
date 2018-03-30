defmodule MinelixirWeb.UserController do
  use MinelixirWeb, :controller

  def index(conn, _params) do
    users = File.read(
      Application.get_env(:minelixir, :minecraft_server_path) <> "/usercache.json"
    )
    case users do
      {:ok, data} ->
        conn
        |> put_status(200)
        |> json(
             data
             |> Poison.decode!()
           )
      _ ->
        conn
        |> put_status(400)
        |> json(
             %{

             }
           )
    end
  end

  def detail(conn, params) do
    uuid = params
           |> Map.get("uuid")
    stats = File.read(
              Application.get_env(:minelixir, :minecraft_server_path) <> "/world/stats/" <> uuid <> ".json"
            )
            |> IO.inspect()
    case stats do
      {:ok, data} ->
        conn
        |> put_status(200)
        |> json(
             data
             |> Poison.decode!()
           )
      _ ->
        conn
        |> put_status(400)
        |> json(
             %{

             }
           )
    end
  end
end
