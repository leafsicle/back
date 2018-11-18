Rails.application.routes.draw do
  resources :frequencies
  resources :histories
  resources :paids
  resources :accounts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
