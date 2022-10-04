class Review < ApplicationRecord
  belongs_to :user
  belongs_to :perfume

  validates :rating, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
  validates_presence_of :user_id, :perfume_id, :comment, :rating, :image, :would_buy_again
end
