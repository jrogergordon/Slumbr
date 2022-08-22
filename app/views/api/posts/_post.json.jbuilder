json.extract! post, :title, :content, :type, :author_id,
            :likes_count, :parent_post_id, :image_file_name, :file_name, 
            :file_type, :file_size, :post_url, :photo

json.author do
    json.partial! "api/users/user", user: post.author
end

# json.set! :likers do
#     json.array! post.likes.pluck(:user_id)
# end

# json.comments post.comments, :body, :author_id

