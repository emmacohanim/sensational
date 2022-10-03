class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :perfume, null: false, foreign_key: true
      t.integer :rating
      t.text :comment
      t.boolean :would_buy_again
      t.string :image

      t.timestamps
    end
  end
end
