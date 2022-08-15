# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  content         :text             not null
#  file_name       :string
#  file_size       :integer
#  file_type       :string
#  image_file_name :string
#  likes_count     :integer          not null
#  post_type       :string
#  title           :string           not null
#  type            :text             not null
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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
