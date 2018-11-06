class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create!(user_params)
    render json: @user
  end

  def show
    @user = [User.find(params[:id]), User.find(params[:id]).posts.order("created_at DESC")]
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)
    render json: @user
  end

  def destroy
    @user = User.find(params[:id]).delete
    render status: 200
  end

private
  def user_params 
    params.require(:user).permit(:name, :current_city, :image_url)
  end
  
end
