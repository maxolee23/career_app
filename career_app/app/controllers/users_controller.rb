class UsersController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def index 
        @users = User.all 
        render json: @users, only: [:id, :username, :password_digest], 
        include: [:careers]
    end

    def create
        user=User.new(user_params)
        # byebug
        if user.valid?
            # byebug
            user.save
            render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: {error: "failed to create user"}, status: :not_acceptable
        end

    end


    private

    def user_params 
        params.require(:user).permit(:username, :password)
    end
end
