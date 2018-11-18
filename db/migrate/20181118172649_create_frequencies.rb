class CreateFrequencies < ActiveRecord::Migration[5.2]
  def change
    create_table :frequencies do |t|
      t.string :duration
      t.integer :days

      t.timestamps
    end
  end
end
