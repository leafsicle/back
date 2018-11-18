class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.date :due
      t.boolean :income
      t.integer :amount_due
      t.string :frequency
      t.boolean :paid
      t.text :notes

      t.timestamps
    end
  end
end
