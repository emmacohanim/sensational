class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :perfumes, through: :reviews
    has_secure_password

    validates_presence_of :username, :password_digest
    validates_uniqueness_of :username
    validates :username, length: { minimum: 5}
    validates :password, length: { minimum: 6}

end
