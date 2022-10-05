class Perfume < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    accepts_nested_attributes_for :reviews
end
