Rails.application.routes.draw do
 	root :to => 'pages#home'

 	get '/login' => 'session#new', as: 'login'
 	post '/login' => 'session#create'
  	delete '/login' => 'session#destroy', as: 'logout'

 	resources :users


end
