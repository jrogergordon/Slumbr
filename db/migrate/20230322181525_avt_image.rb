class AvtImage < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :avatar_image
  end
end
