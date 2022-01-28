class MountainSerializer < ActiveModel::Serializer
  attributes :id, :summary, :pass_info, :avg_snowfall, :best_for, :image_url, :avg_ratings, :name

  def avg_ratings
    {
      avg_town_rating: object.average_town_rating,
      avg_ski_rating: object.average_ski_rating
    }
  end
end
