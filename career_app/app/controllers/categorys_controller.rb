class CategorysController < ApplicationController
    def index 
        @categorys = Category.all 
        render json: @categorys, only: [:id, :title], include: [ :careers , :items ]
    end

    # def show 
    #     @category =  Category.find(params[:id])
    #     @careers = @category.careers
    #     render json: @careers
    # end
end
