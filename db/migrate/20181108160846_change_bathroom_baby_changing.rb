class ChangeBathroomBabyChanging < ActiveRecord::Migration[5.2]
  def change
    change_column :bathrooms, :baby_changing, :string
  end
end
