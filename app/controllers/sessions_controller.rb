class SessionsController < ApplicationController
    def create
        user = find_by_username
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
