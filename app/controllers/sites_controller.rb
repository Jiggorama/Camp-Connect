class SitesController < ApplicationController
  before_action :set_site, only: [:show, :update, :destroy]
  
  # GET /sites
  def index
    @sites = Site.all

    render json: @sites, include: :users
  end

  # GET /sites/:id
  def show  
    render json: @site, include: [:users, comments:{include: :user}] 
  end

  # PUT /sites/:id
  def update
    if @site.update(site_params)
      render json: @site
    else
      render json: @site.errors, status: :unprocessable_entity
    end
  end

  # POST /visited
  def visited
    @site = Site.find(params[:site_id])
    @user = User.find(params[:user_id])
    @user.sites << @site
    render json: @user, include: :sites
  end

  # DELETE /visited
  def unvisited
    @site = Site.find(params[:site_id])
    @user = User.find(params[:user_id])
    @user.sites.delete(@site)
    render json: @user, include: :sites
  end

  private
    def set_site
      @site = Site.find(params[:id])
    end

    def site_params
      params.require(:site).permit(:name, :description, :image)
    end
end
