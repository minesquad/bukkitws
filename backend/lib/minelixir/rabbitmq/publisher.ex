defmodule Minelixir.RabbitMQ.Publisher do

  use GenServer
  use AMQP

  require Logger

  def start_link do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  defp exchange do
    "minecraft-in"
  end

  defp queue do
    "minecraft-in"
  end

  def init(_opts) do
    rabbitmq_connect()
  end

  def rabbitmq_connect do
    case Connection.open("amqp://guest:guest@localhost") do
      {:ok, conn} ->
        # Get notifications when the connection goes down
        Process.monitor(conn.pid)
        {:ok, chan} = Channel.open(conn)
        setup_queues(chan)
        Logger.info("#{__MODULE__}.rabbitmq_connect\\1: success")
        {:ok, chan}
      {:error, msg} ->
        # Reconnection loop
        Logger.error("#{__MODULE__}.rabbitmq_connect\\1: #{inspect(msg)}")
        :timer.sleep(10000)
        rabbitmq_connect()
    end
  end

  def setup_queues(chan) do
    AMQP.Exchange.direct(chan, exchange(), durable: false)
    Queue.bind(chan, queue(), exchange(), routing_key: queue())
  end

  def publish(payload) do
    GenServer.call(__MODULE__, {:publish, payload})
  end

  def handle_info({:DOWN, _, :process, _pid, _reason}, _) do
    {:ok, chan} = rabbitmq_connect()
    {:noreply, chan}
  end

  def handle_call({:publish, payload}, _from, chan) do
    result = AMQP.Basic.publish(
      chan,
      exchange(),
      "minecraft-in",
      Poison.encode!(payload)
    )

    {:reply, result, chan}
  end

end