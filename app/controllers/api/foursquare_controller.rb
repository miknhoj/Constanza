class Api::FoursquareController < ApplicationController
  include HTTParty

  VENUE_URL="https://api.foursquare.com/v2/venues/"
  VERSION = "20181109"
  CLIENT_ID = Figaro.env.client_id
  CLIENT_SECRET = Figaro.env.client_secret
  
  # https://api.foursquare.com/v2/venues/search
  # ?client_id=Figaro.env.client_id
  # &client_secret=Figaro.env.client_secret
  # &ll=40.7,-74
  # &query=sushi
  # &v=YYYYMMDD

  # def index
  #   url = VENUE_URL + "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&near=" + "Atlanta,GA" + "&v=" + VERSION
  #   @response = HTTParty.get(url)
    
  # end

  VENUES_URL = "https://api.foursquare.com/v2/venues/search"

  def index
    url = VENUES_URL + "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&near=" + "Atlanta,GA" + "&v=" + VERSION
    @response = HTTParty.get(url)
    render json: @response
end 

  
end
