Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get 'user/:id', to: 'pages#user', as: 'user'
  get 'like/:id', to: 'pages#like', as: 'like'
  mount ActionCable.server => '/cable'
end
