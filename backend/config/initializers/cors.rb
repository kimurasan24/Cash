Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000',"https://web.cashlesstimes.site","cashlesstimes-back.onrender.com","https://frontend-g2wry1hx6-kimurasan24.vercel.app"
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
