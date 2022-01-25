class FavoritesController < ApplicationController
    before_action :authorize

    def index
        user = current_user
        render json: user.favorite_mountains
    end

    def destroy
        favorite = Favorite.find_by_id(params[:id])
        if favorite
            favorite.destroy
            head :no_content
        else
            render_not_found_message
        end
    end

    private

    def authorize
        return render json: { error: "Must be logged in to view your favorites" }, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found_message
        render json: { error: "Favorite not found"}, status: :not_found
    end
end
