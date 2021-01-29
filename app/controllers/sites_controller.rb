class SitesController < ApplicationController
  before_action :set_site, only: [:show, :update, :destroy]
  
  # GET /sites
  def index
    @sites = Site.all

    render json: @sites, include: :users
  end

  # GET /sites/1
  def show
  
    render json: @site, include: [:users, :comments] 
  end

  # POST /sites
  def visited_by_user
    @site = Site.find(params[:site_id])
    @user = User.find(params[:user_id])
    @user.sites << @site
    render json: @user, include: :sites
  end

  # PATCH/PUT /sites/1
  def update
    if @site.update(site_params)
      render json: @site
    else
      render json: @site.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sites/1
  def unvisited
    @site = Site.find(params[:site_id])
    @user = User.find(params[:user_id])
    @user.sites.delete(@site)
    render json: @user, include: :sites
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_site
      @site = Site.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def site_params
      params.require(:site).permit(:name, :description, :image)
    end
end
