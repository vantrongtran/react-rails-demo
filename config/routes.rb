Rails.application.routes.draw do
  root to: "home#index"
  get '*path', to: "home#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
