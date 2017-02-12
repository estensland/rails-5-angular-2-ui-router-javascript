Rails.application.routes.draw do
  namespace :api do
    get 'superheroes', to: 'superheroes#index'
  end
end
