class Rating < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :bathroom, optional: true
end
