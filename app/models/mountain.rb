class Mountain < ApplicationRecord
    has_many :ratings
    has_many :users_w_ratings, through: :ratings, source: :user
    has_many :favorites
    has_many :users_w_favorites, through: :favorites, source: :user
end
