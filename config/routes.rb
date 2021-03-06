Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/api/foursquare', to: 'api/foursquare#index'
get '/api/foursquare/:id', to: 'api/foursquare#show'

namespace :api do
  resources :users do
    resources :ratings
  end
    resources :bathrooms do
      resources :ratings
     end
end

end
