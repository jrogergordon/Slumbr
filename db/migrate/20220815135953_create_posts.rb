class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.text :type, null: false
      t.integer :author_id, null: false
      t.integer :likes_count, null: false
      t.integer :parent_post_id
      t.string :image_file_name
      t.string :file_name
      t.string :file_type
      t.integer :file_size
      t.string :post_type

      t.timestamps
    end

    add_index :posts, :author_id  
    add_index :posts, :parent_post_id
  end
end
