class IndexFollows < ActiveRecord::Migration[5.2]
  def change
    add_index :follows, :follower_id
  end
end
