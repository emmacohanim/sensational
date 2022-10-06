Rails.application.routes.draw do
 
  resources :reviews
  resources :perfumes, only: [:index, :show, :create]
  resources :users, only: [:create, :show]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  delete "/logout", to: "sessions#destroy"
end
