# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :minelixir,
       ecto_repos: [Minelixir.Repo]

# Configures the endpoint
config :minelixir,
       MinelixirWeb.Endpoint,
       url: [
         host: "localhost"
       ],
       secret_key_base: "npt0/Fd3kYjO+GDk8q1vAPDrrhC17G4jBZniXWg6tTsbMyXB1Pn+GQ3UhZRaVe9f",
       render_errors: [
         view: MinelixirWeb.ErrorView,
         accepts: ~w(html json)
       ],
       pubsub: [
         name: Minelixir.PubSub,
         adapter: Phoenix.PubSub.PG2
       ]

# Configures Elixir's Logger
config :logger,
       :console,
       format: "$time $metadata[$level] $message\n",
       metadata: [:request_id]

minecraft_server_path = if System.get_env("MINECRAFT_SERVER_PATH") do
  System.get_env("MINECRAFT_SERVER_PATH")
else
  Path.expand("../bukkit", System.cwd())
end

config :minelixir,
       minecraft_server_path: minecraft_server_path

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
