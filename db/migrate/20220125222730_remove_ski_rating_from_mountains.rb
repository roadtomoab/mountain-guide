class RemoveSkiRatingFromMountains < ActiveRecord::Migration[7.0]
  def change
    remove_column :mountains, :ski_rating, :float
  end
end
