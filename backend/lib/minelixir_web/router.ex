defmodule MinelixirWeb.Router do
  use MinelixirWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MinelixirWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", MinelixirWeb.Controllers do
    pipe_through :api

    scope "/v1", Api.V1 do
      get "/system", SystemController, :index
    end
  end


end
