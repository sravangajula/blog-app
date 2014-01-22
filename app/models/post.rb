class Post < ActiveRecord::Base
  attr_accessible :title, :body
  validates :title, presence: true
  validates :body, presence: true
  has_many :comments, dependent: :destroy 
  validates_associated :comments
end
