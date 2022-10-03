class CreatePerfumes < ActiveRecord::Migration[7.0]
  def change
    create_table :perfumes do |t|
      t.string :name
      t.string :brand

      t.timestamps
    end
  end
end
