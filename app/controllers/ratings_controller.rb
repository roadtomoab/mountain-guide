class RatingsController < ApplicationController
    before_action :authorize
    
    def create
        rating = Rating.create(rating_params)
        if rating.valid?
            render json: rating, status: :created
        else
            render json: { errors: rating.errors.full_message }, status: :unprocessable_entity
        end
    end

    private

    def authorize
        return render json: { error: "Must be logged in to leave a rating" }, status: :unauthorized unless session.include? :user_id
    end

    def rating_params
        params.permit(:town_rating, :ski_rating, :mountain_id, session[:user_id])
    end
end
