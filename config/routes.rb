Rails.application.routes.draw do
  resources :favorites, only: [:index, :destroy]
  resources :ratings
  resources :users
  resources :mountains, only: [:index, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/signup", to: "users#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
