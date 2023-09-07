class AvtImage3 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar_image, :string
  end
end
