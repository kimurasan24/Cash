class News < ApplicationRecord
  validates :title, presence: true
  validates :link, presence: true
  validates :id, precence: true 
  # 他の必要なバリデーションも追加できます。
end
