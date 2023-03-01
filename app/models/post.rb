# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  content         :string           not null
#  file_name       :string
#  file_size       :integer
#  file_type       :string
#  image_file_name :string
#  likes_count     :integer          not null
#  post_type       :string
#  post_url        :string
#  title           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  author_id       :integer          not null
#  parent_post_id  :integer
#
# Indexes
#
#  index_posts_on_author_id       (author_id)
#  index_posts_on_parent_post_id  (parent_post_id)
#
class Post < ApplicationRecord

    validates :author_id, presence: true

    has_one_attached :photo

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

    has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: "Like"

    has_many :likers,
    through: :likes,
    source: :user

  def likers_ids
    liker_ids = []
    self.likers.each do |liker|
      liker_ids << liker.id
    end

    return liker_ids
  end  
  
  def followers_ids
    follower_ids = []
    self.author.followers.each do |follow|
      follower_ids << follow.follower_id
    end

    return follower_ids
  end
end