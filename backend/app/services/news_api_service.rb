require 'httparty'

class NewsApiService
  API_ENDPOINT = 'https://newsapi.org/v2/everything'
  API_KEY = ENV['NEWS_API_KEY']

  def self.fetch_news(keyword = 'キャッシュレス')
    response = HTTParty.get(API_ENDPOINT, query: {
      q: keyword,
      apiKey: API_KEY,
      sortBy: 'publishedAt',
      pageSize: 30
    })

    if response.success?
      response.parsed_response['articles'].map do |article|
        {
          id: article['source']['id'],
          title: article['title'],
          summary: article['description'],
          link: article['url'],
          published_at: article['publishedAt'],
          content: article['content'],
          image_url: article['urlToImage'],
          news_url: article['url']
        }
        
      end
    else
      []
    end
  end
end
