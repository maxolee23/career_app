class CreateCareerUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :career_users do |t|
        t.integer :user_id 
        t.integer :career_id
      t.timestamps
    end
  end
end
