class AddNameToBathroom < ActiveRecord::Migration[5.2]
  def change
    add_column :bathrooms, :location_name, :string
  end
end
