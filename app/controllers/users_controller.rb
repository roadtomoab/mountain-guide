class UsersController < ApplicationController
    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No current session stored", status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
    end

    private
    
    def user_params
        params.permit(:email, :username, :password)
    end
end
