defmodule Minelixir.Tools.User do

  def list() do
    list = File.read(
      Application.get_env(:minelixir, :minecraft_server_path) <> "/usercache.json"
    )
    case list do
      {:ok, data} ->
        {
          :ok,
          data
          |> Poison.decode!()
        }
      _ ->
        {:error, %{}}
    end
  end

  def stats(uuid) do
    stats = File.read(
      Application.get_env(:minelixir, :minecraft_server_path) <> "/world/stats/" <> uuid <> ".json"
    )
    case stats do
      {:ok, data} ->
        {
          :ok,
          data
          |> Poison.decode!()
        }
      _ ->
        {:error, %{}}
    end
  end

  def advancements(uuid) do
    advancements = File.read(
      Application.get_env(:minelixir, :minecraft_server_path) <> "/world/advancements/" <> uuid <> ".json"
    )
    case advancements do
      {:ok, data} ->
        {
          :ok,
          data
          |> Poison.decode!()
        }
      _ ->
        {:error, %{}}
    end
  end

end