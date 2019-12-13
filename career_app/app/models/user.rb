class User < ApplicationRecord
    has_many :career_users
    has_many :careers, through: :career_users
end
