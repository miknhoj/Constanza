class CreateBathrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :bathrooms do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip
      t.boolean :baby_changing
      t.integer :toilets
      t.integer :sinks

      t.timestamps
    end
  end
end
