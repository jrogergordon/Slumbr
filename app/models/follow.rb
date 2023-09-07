# == Schema Information
#
# Table name: follows
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  follower_id  :integer          not null
#  following_id :integer          not null
#
# Indexes
#
#  index_follows_on_follower_id   (follower_id)
#  index_follows_on_following_id  (following_id)
#
class Follow < ApplicationRecord
  validates :following_id, :follower_id, presence: true
  validates :follower, uniqueness: { scope: :following }

  belongs_to :following,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: "User"

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "User"    
end
