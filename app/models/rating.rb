class Rating < ApplicationRecord
  belongs_to :mountain
  belongs_to :user
end
