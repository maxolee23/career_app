Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      resources :careers, only: [:index]
      resources :categorys, only: [:index]
      resources :users
      post '/login', to: 'auth#create'
  end

