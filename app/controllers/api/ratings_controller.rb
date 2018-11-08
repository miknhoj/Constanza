class Api::RatingsController < ApplicationController
  def index
    @ratings = Bathroom.find(params[:bathroom_id]).ratings
    render json: @ratings
  end

  def show
    @rating = Rating.find(params[:id])
    render json: @rating
  end

  def create
    @bathroom = Bathroom.find(params[:bathroom_id])
    @rating = @bathroom.ratings.create!(rating_params)
    render json: @rating
  end

  def update
    @rating = Rating.find(params[:id])
    @rating.update(rating_params)
    render json: @rating
  end

  def destroy
    @rating = Rating.find(params[:id])
    @rating.destroy
    render status: 200
  end

private

  def rating_params
    params.require(:form_data).permit(:rating, :cleaniness, :privacy_level, :comment)
  end

end
