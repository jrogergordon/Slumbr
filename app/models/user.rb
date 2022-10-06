# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  avatar_image    :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#
class User < ApplicationRecord

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Post"
      
    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Like"

  has_many :followers,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: "Follow"

  has_many :followings,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "Follow"

  has_many :following_users,
    through: :followees,
    source: :followee

  has_many :followed_posts,
    through: :followee_users,
    source: :posts

    def self.find_by_credentials(username, password)
        # debugger;
        @user = User.find_by(username: username)
        @user && @user.is_password?(password) ? @user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private 
    
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end
    
end
