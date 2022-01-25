class UsersController < ApplicationController
    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: { error: "No current session stored" }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { erros: user.errors.full_message }, status: :unprocessable_entity
        end
    end

    private
    
    def user_params
        params.permit(:email, :username, :password)
    end
end
