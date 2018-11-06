class Api::BathroomsController < ApplicationController
  def index
    @bathrooms = Bathroom.all
    render json: @bathrooms
  end

  def show
    @bathroom = Bathroom.find(params[:id])
    render json: @bathroom
  end


end
