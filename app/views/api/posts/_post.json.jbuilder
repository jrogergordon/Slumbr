json.extract! post, :id, :title, :content, :post_type, :author_id,
            :likes_count, :parent_post_id, :image_file_name, :file_name, 
            :file_type, :file_size, :post_url
json.likes post.likes.count
# if(current_user.id) {
#     json.liked post.likers_ids.include?(current_user.id)
#     json.followed post.followers_ids.include?(current_user.id)
# }
json.liked post.likers_ids.include?(current_user.id)
json.followed post.followers_ids.include?(current_user.id)

