class AvtImageNull2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :avatar_image, false
  end
end
