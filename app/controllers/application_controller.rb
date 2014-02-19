class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :authenticate_user!
  
  rescue_from CanCan::AccessDenied do |exception|
    logger.info ">>>>>>>>>>>>>>CanCan error::::#{exception.inspect}"
    redirect_to root_url, :alert => exception.message
  end

  
end
