class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :due_date
      t.json :recurring, null: false, default: {}
      t.integer :amount_due
      t.string :flow
      t.boolean :was_paid
      t.text :notes

      t.timestamps
    end
  end
end
