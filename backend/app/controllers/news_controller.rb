class NewsController < ApplicationController
  def index
    keyword = params[:keyword]||"キャッシュレス"
    news_data = NewsApiService.fetch_news(keyword)
    if news_data.present?
      render json: news_data
    else
      render json: { error: 'Failed to fetch news' }, status: 500
    end
  end
end
