class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :mountain
  has_one :user
end
