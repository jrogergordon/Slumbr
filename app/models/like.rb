# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_likes_on_post_id  (post_id)
#  index_likes_on_user_id  (user_id)
#
class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true
  validates :post, uniqueness: { scope: :user }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Post"
end
