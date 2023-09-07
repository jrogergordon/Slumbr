class FinishFollows < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :following_id, :integer, null: false
    add_index :follows, :following_id
  end
end
