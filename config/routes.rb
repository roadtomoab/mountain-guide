Rails.application.routes.draw do
  resources :favorites, only: [:index, :create, :destroy]
  resources :ratings, only: [:create]
  resources :users, only: [:show, :create, :index, :update]
  resources :mountains, only: [:index, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
