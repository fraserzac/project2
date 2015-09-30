Rails.application.routes.draw do
 	root :to => 'pages#home'

 	get '/account' => 'users#new'
 	get '/login' => 'session#new', as: 'login'
 	post '/login' => 'session#create'
  	delete '/login' => 'session#destroy', as: 'logout'

  	get '/contacts', to: 'contacts#new', via: 'get'
	resources "contacts", only: [:new, :create]

 	resources :users


end
