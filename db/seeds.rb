# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#super user
superuser = User.find_or_create_by_email(email: "admin@admin.com", password: "12345678", password_confirmation: "12345678")

if superuser.errors.blank?
    puts "***superuser created ***"
    superuser.roles << Role.where(name: "Admin") if superuser.roles.empty?
else
    puts "admin user failed to create due to below reasons:"
    superuser.errors.each do |x, y|
       puts"#{x} #{y}" # x will be the field name and y will be the error on it
     end
end

User.all.each do|u|
    if u.roles.empty?
      p "User doesn't have a role"
      p u.roles << Role.where(name: "User")
    else
      p "User has already assigned to a role"
      p u
    end
  end
