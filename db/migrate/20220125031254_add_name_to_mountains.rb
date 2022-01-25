class AddNameToMountains < ActiveRecord::Migration[7.0]
  def change
    add_column :mountains, :name, :string
  end
end
