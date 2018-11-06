class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :rating
      t.integer :cleaniness
      t.integer :privacy_level
      t.text :comment
      t.references :user, foreign_key: true
      t.references :bathroom, foreign_key: true

      t.timestamps
    end
  end
end
