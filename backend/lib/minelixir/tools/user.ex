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

  def list!() do
    case list() do
      {:ok, data} -> data
      _ -> throw :error
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
          |> Map.to_list()
          |> Enum.map(
               fn {key, value} ->
                 %{
                   key: key,
                   value: value
                 }
               end
             )
        }
      _ ->
        {:error, %{}}
    end
  end

  def stats!(uuid) do
    case stats(uuid) do
      {:ok, data} -> data
      _ -> throw :error
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
          |> Map.to_list()
          |> Enum.map(
               fn {key, value} ->
                 %{
                   key: key,
                   done: value
                         |> Map.get("done"),
                   criteria: value
                             |> Map.get("criteria")
                 }
               end
             )
        }
      _ ->
        {:error, %{}}
    end
  end

  def advancements!(uuid) do
    case advancements(uuid) do
      {:ok, data} -> data
      _ -> throw :error
    end
  end

end