class Post < ActiveRecord::Base
  attr_accessible :title, :body
  validates :title, presence: true
  validates :body, presence: true
  has_many :comments, dependent: :destroy 
  validates_associated :comments
  
  def self.comments_count
    joins("LEFT OUTER JOIN comments ON comments.post_id = posts.id").select('posts.title, posts.body, posts.id,count(comments) as comments_count').
              group('posts.title, posts.body, posts.id')
  end  
    
  
end
