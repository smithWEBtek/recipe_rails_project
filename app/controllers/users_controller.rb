class UsersController < ApplicationController

    def index
        @users = User.all
    end

    def new
        @user = User.new
    end

    def create
        @user = User.
    end

    

    private

    def user_params(user)
        params.require(:user).permit(:name, :password, :password_confirmation)
    end
end
