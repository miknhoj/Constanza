class Bathroom < ApplicationRecord
  has_many :ratings, dependent: :destroy
  has_many :users, :through => :ratings


end

 