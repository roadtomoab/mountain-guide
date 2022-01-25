class MountainsController < ApplicationController
    def index
        render json: Mountain.all
    end

    def show
    end
end
