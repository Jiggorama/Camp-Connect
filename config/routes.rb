Rails.application.routes.draw do
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :sites, only: [:index, :show, :update] do
    resources :comments, except: [:index]
  end
  post '/visited', to: 'sites#visited_by_user'
  delete '/visited', to: 'sites#unvisited'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
