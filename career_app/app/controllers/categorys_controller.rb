class CategorysController < ApplicationController
    def index 
        @categorys = Category.all 
        render json: @categorys, only: [:id, :title]
    end
end
