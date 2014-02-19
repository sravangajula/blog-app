class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable , :registerable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :role_ids, :current_password
  # attr_accessible :title, :body

  has_and_belongs_to_many :roles, :uniq => true
  before_create :set_default_role


  def role?(role)
   return roles.where(:name => role.to_s.camelize).present?
#    return !!self.roles.where(:name => role.to_s.camelize)
  end

  def has_role?(role_sym)
    roles.any? { |r| r.name.underscore.to_sym == role_sym }
  end
  

  private
  def set_default_role
    self.roles ||= Role.find_by_name('User')
  end
end
