class AuthController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def create 
        user = User.find_by(username: params[:username])
        # byebug
        if user || user.authenticate(params[:password])
            # byebug
            render json: {username: user.username, token: encode_token({user_id: user.id})}
        else
            render json: {error: "invalid username or password"}
        end
    end

end
