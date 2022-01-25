class MountainSerializer < ActiveModel::Serializer
  attributes :id, :summary, :pass_info, :avg_snowfall, :town_rating, :ski_rating, :best_for
end
