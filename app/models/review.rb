class Review < ApplicationRecord
  belongs_to :user
  belongs_to :perfume, dependent: :destroy 

  validates :rating, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
  validates_presence_of :comment, :rating, :image
  validates_inclusion_of :would_buy_again, in: [true, false]
end
