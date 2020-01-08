class User < ApplicationRecord
    has_secure_password
    has_many :career_users
    has_many :careers, through: :career_users
end
