defmodule Minelixir.RabbitMQ.Listener do

  require Logger

  use GenServer

  alias Minelixir.RabbitMQ.Publisher
  alias Minelixir.Minecraft.Server, as: MinecraftServer

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  def init(_) do
    {:ok, chan} = rabbitmq_connect()
    Publisher.publish(%{event: "online"})
    {:ok, chan}
  end

  defp exchange do
    "minecraft-out"
  end

  defp rabbitmq_connect() do
    case AMQP.Connection.open("amqp://guest:guest@localhost") do
      {:ok, conn} ->
        # Get notifications when the connection goes down
        Process.monitor(conn.pid)
        # Everything else remains the same
        {:ok, chan} = AMQP.Channel.open(conn)
        setup_queue(chan)
        {:ok, chan}
      {:error, _} ->
        # Reconnection loop
        :timer.sleep(10000)
        rabbitmq_connect()
    end
  end

  defp setup_queue(chan) do
    AMQP.Queue.declare(
      chan,
      "phoenix-rabbitmq-listener"
    )
    AMQP.Exchange.fanout(chan, exchange())
    AMQP.Queue.bind(chan, "phoenix-rabbitmq-listener", exchange())
    AMQP.Basic.consume(chan, "phoenix-rabbitmq-listener", nil, no_ack: true)
  end

  def handle_info({:DOWN, _, :process, _pid, _reason}, _) do
    {:ok, state} = rabbitmq_connect()
    {:noreply, state}
  end

  def handle_info({:basic_consume_ok, _}, state) do
    {:noreply, state}
  end

  def handle_info({:basic_cancel, _}, state) do
    {:stop, :normal, state}
  end

  def handle_info({:basic_cancel_ok, _}, state) do
    {:noreply, state}
  end

  def handle_info({:basic_deliver, payload, %{delivery_tag: tag, redelivered: redelivered}}, chan = state) do
    spawn fn -> consume(chan, tag, redelivered, payload) end
    {:noreply, state}
  end

  defp consume(channel, tag, redelivered, payload) do
    case Poison.Parser.parse(payload) do
      {:ok, data} ->
        Logger.debug("#{__MODULE__} got message #{inspect data}")
        event = Map.get(data, "event")
        MinecraftServer.event(String.to_atom(event), data);
      _ -> nil
    end
  rescue
    exception ->
      AMQP.Basic.reject channel, tag, requeue: not redelivered
      Logger.error(inspect(exception))
  end

end
