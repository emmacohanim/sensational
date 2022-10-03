class User < ApplicationRecord
    has_many :reviews
    has_many :perfumes, through: :reviews
end
