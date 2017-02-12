Rails.application.routes.draw do
  root 'base#index'

  namespace :api do
    get 'superheroes', to: 'superheroes#index'
  end
end
