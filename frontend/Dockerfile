# React TypeScriptのフロントエンド用のDockerfile

FROM node:14

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# その他のフロントエンド関連のファイルをコピー
COPY ./ ./

CMD ["npm", "start"]
