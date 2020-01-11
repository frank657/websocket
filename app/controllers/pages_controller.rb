class PagesController < ApplicationController
  def home
    @users = User.all
  end

  def like
    puts 'liking'
    ActionCable.server.broadcast "UserChannel_#{params[:id]}", {like: 'You are being liked'}
  end

  def user
    @user = User.find(params[:id])
  end
end
