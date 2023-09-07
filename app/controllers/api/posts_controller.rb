class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        @post.likes_count = 0

        if @post.save
        render :show
        else
        render @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        # @post.post_type == "photo" && 
        if @post.update(post_params)
            render :show
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
        params.require(:post).permit(:title, :content, :author_id,
            :likes_count, :parent_post_id, :image_file_name, :file_name, 
            :file_type, :file_size, :post_url, :photo, :post_type)
    end
end