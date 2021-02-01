class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @site = Site.find(params[:site_id])
    @comments = Comment.where(site_id: @site.id)
    render json: @comments, include: :user
  end

  def show
    render json: @comment
  end

  # POST /sites/:site_id/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @site = Site.find(params[:site_id])
    @comment.site = @site

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PUT /sites/:site_id/comments/:id
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sites/:site_id/comments/:id
  def destroy
    @comment.destroy
  end

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:content)
    end
end
