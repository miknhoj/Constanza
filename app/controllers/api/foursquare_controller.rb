class Api::FoursquareController < ApplicationController
  include HTTParty

  VENUE_URL="https://api.foursquare.com/v2/venues/"
  VERSION = "20181109"
  CLIENT_ID = Figaro.env.client_id
  CLIENT_SECRET = Figaro.env.client_secret

  VENUES_URL = "https://api.foursquare.com/v2/venues/search"

  def index
    url = VENUES_URL + "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&near=" + "Atlanta,GA" + "&limit=5" + "&v=" + VERSION
    @response = HTTParty.get(url)
    render json: @response
  end 

  def show
    url = VENUES_URL + "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&near=" + "Atlanta,GA" + "&limit=5" + "&v=" + VERSION
    @response = HTTParty.get(url)
    render json: @response
  end

  def create 
    
    Bathroom.create!(url)
  end
 
end
