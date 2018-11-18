class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.date :due_date
      t.text :recurring
      t.integer :amount_due
      t.boolean :income
      t.boolean :was_paid
      t.text :notes

      t.timestamps
    end
  end
end
