class Api::SuperheroesController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    heroes = [
      {
        id: 1,
        name: 'Superman',
      },
      {
        id: 2,
        name: 'Batman',
      },
      {
        id: 3,
        name: 'Wonder Woman',
      },
      {
        id: 4,
        name: 'Wolverine',
      }
    ]

    render json: heroes, status: 200
  end
end
