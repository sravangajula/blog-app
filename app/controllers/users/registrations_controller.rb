class Users::RegistrationsController < Devise::RegistrationsController
  skip_before_filter :require_no_authentication

  def sign_up(resource_name, resource)
    if current_user and current_user.role? :admin
      set_flash_message :notice, :add_user,  :user_name => resource.email if is_flashing_format?
    else
      super  
    end
  end

  def create
    if current_user and current_user.role? :admin
      session["#{resource_name}_return_to"] = users_path
    end
    super
  end

end