class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render json: ['You are in!']
        else
            render json: ['Invalid username or password']
        end
    end

    def destroy
        @user = current_user

        if @user
            logout
            render json: ['You are out!']
        else
            render json: ['No current user error']
    end
end
