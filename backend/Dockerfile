# Ruby on Rails APIモードのバックエンド用のDockerfile

FROM ruby:3.1.2


# 必要なパッケージのインストール
RUN apt-get update -qq && apt-get install -y libmariadb-dev

WORKDIR /app

# GemfileとGemfile.lockをコピー
COPY ./Gemfile ./Gemfile.lock ./

# Rubyの依存関係のインストール
RUN gem install bundler:2.4.14

# Bundlerを使ってgemをインストール
RUN bundle install

# ログディレクトリの作成と権限設定
RUN mkdir -p /app/log && chmod 777 /app/log

# その他のバックエンド関連のファイルをコピー
COPY ./ ./

# Unicornを起動するコマンド
CMD ["bundle", "exec", "unicorn", "-c", "config/unicorn.rb"]