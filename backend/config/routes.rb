Rails.application.routes.draw do
  resources :news, only: [:index]
end
