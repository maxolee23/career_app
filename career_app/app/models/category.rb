class Category < ApplicationRecord
    has_many :career_categorys
    has_many :careers, through: :career_categorys
    has_many :items, through: :careers
end
