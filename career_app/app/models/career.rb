class Career < ApplicationRecord
    has_many :career_users
    has_many :users, through: :career_users
    has_many :career_categorys 
    has_many :categorys, through: :career_categorys
    has_many :items
end
