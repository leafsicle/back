Rails.application.routes.draw do
  namespace :api do
    resources :events

  end
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
