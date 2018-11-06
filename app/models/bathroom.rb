class Bathroom < ApplicationRecord
  has_many :ratings, dependent: :destroy
end
