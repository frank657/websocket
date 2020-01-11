class PagesController < ApplicationController
  def home
    @users = User.all
  end

  def like
    @user = User.find(params[:id])
    @user.liked += 1
    @user.save
    puts 'liking'
    ActionCable.server.broadcast "UserChannel_#{params[:id]}", {like: 'You are being liked', liked: @user.liked}
  end

  def user
    @user = User.find(params[:id])
  end
end
