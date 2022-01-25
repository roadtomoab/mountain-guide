class RemoveTownRatingFromMountains < ActiveRecord::Migration[7.0]
  def change
    remove_column :mountains, :town_rating, :float
  end
end
