class Bathroom < ApplicationRecord
  has_many :ratings, dependent: :destory
end
