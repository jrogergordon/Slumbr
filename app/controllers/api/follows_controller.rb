class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.following_id = params[:user_id]
    @follow.save!
    render json: @follow
  end

  def destroy
    @follow = current_user.followings.find_by(following_id: params[:user_id])
    @follow.destroy
    render json: @follow
  end
  
end