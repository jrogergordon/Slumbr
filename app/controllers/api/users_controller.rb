class Api::UsersController < ApplicationController
    # def create 
    #     @user = User.new(user_params)
    #     if @user.save
    #         login(@user)
    #         # render json: @user
    #         # render 'api/users/show'
    #     else 
    #         render json: @user.errors.full_messages, status: 422
    #     end
    # end

    # def index
    #     @user = User.all
    #     # render :index
    #     render json: ["all da users"]
    # end

    # def show
    #     @user = User.find(params[:id])
    #     # render :show
    #     render json:["you found da user"]
    # end


    # private

    # def user_params
    #     params.require(:user).permit(:username, :password, :email)
    # end
end
