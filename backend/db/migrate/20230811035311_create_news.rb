class CreateNews < ActiveRecord::Migration[7.0]
  def change
    create_table :news do |t|
      t.string :title
      t.text :summary
      t.string :link
      t.datetime :published_at
      t.text :content
      t.string :image_url
      t.string :news_url

      t.timestamps
    end
  end
end
