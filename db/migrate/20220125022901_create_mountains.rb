class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.text :summary
      t.string :pass_info
      t.float :avg_snowfall
      t.float :town_rating
      t.float :ski_rating
      t.string :best_for

      t.timestamps
    end
  end
end
