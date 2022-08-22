class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id

        if @post.save
        render :show
        else
        render @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        
        if @post.post_type == "photo" && @post.update(post_params)
            render json: @post
        elsif @post.update(post_params)
            render json: @post
        else
            render @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        if @post.parent_post_id
            @parent_post = Post.find(@post.parent_post_id)
        end
        render :show
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :type, :author_id,
            :likes_count, :parent_post_id, :image_file_name, :file_name, 
            :file_type, :file_size, :post_url, :photo)
    end
end