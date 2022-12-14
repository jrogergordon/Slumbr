Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :index, :show] do
      resource :follow, only: [:create, :destroy]
    end


    resources :posts, only: [:create, :index, :show, :update, :destroy] do
      resource :like, only: [:create, :destroy]
    end
 

    resource :session, only: [:create, :destroy]
    
  end

  get '*path', to: "static_pages#frontend_index"

  
end
