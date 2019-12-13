class CreateCareerCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :career_categories do |t|
        t.integer :category_id 
        t.integer :career_id
      t.timestamps
    end
  end
end
