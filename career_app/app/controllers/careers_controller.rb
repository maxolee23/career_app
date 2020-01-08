class CareersController < ApplicationController
    def index 
        @careers = Career.all 
        render json: @careers, only: [:id, :name], 
        include: [:items, :users, :categorys]
    end


end
