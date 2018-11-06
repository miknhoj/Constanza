class Api::BathroomsController < ApplicationController
  def index
    @bathrooms = Bathroom.all
    render json: @bathrooms
  end

  def show
    @bathroom = Bathroom.find(params[:id])
    render json: @bathroom
  end

  def create
    @bathroom = Bathroom.create!(bathroom_params)
    render json: @bathroom
  end

  def update
    
  end


private
  def bathroom_params
    params.require(:bathroom).permit(:street, :city, :state, :zip, :baby_changing, :toilets, :sinks)
  end

end
