Rails.application.routes.draw do
  resources :users
  resources :sites, only: [:index, :show, :update] do
    resources :comments
  end
  post '/visited', to: 'sites#visited'
  delete '/visited', to: 'sites#unvisited'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
