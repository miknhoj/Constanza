class User < ApplicationRecord
  has_many :posts, dependent: :destory
end
