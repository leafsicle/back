Rails.application.routes.draw do
  namespace :api do
    get 'events/index,'
    get 'events/show,'
    get 'events/new,'
    get 'events/edit,'
    get 'events/create,'
    get 'events/update,'
    get 'events/destroy'
  end
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
