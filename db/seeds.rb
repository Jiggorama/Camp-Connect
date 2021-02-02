# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
User.destroy_all
Site.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
@hunter = User.create!(username: 'Hunter', email: 'hunter@broski.com', password: "hunter")
@pakman = User.create!(username: 'Pakman', email: 'pak@broski.com', password: 'pakman')
@slayer = User.create!(username: 'slayer', email: 'slayer@broski.com', password: 'slayer')

puts "#{User.count} admin created"

100.times do |i|
  Site.create!(name: "Site #{i+1}",image: "https://thedyrt.imgix.net/photo/114987/media/green-ridge-state-forest_cefb28c167ca65108c6142f70ef0c434.jpg?auto=format&fit=fillmax&w=547.265625&ixlib=ember-1.0.16", description: 'I haven\'t stayed at this site but leave some comments and I will build a description!' )
end

puts "#{Site.count} campsites created"

Comment.create!(user_id: 2, site_id: 1, content: 'this place is GASSSSS' )
Comment.create!(user_id: 3, site_id: 1, content: 'this place is GASSSSS' )
Comment.create!(user_id: 2, site_id: 1, content: 'this place is GASSSSS' )
Comment.create!(user_id: 4, site_id: 1, content: 'this place is GASSSSS' )
Comment.create!(user_id: 2, site_id: 2, content: 'this place is GASSSSS' )
Comment.create!(user_id: 3, site_id: 2, content: 'this place is GASSSSS' )
Comment.create!(user_id: 2, site_id: 3, content: 'this place is GASSSSS' )
Comment.create!(user_id: 3, site_id: 3, content: 'this place is GASSSSS' )
Comment.create!(user_id: 2, site_id: 3, content: 'this place is GASSSSS' )
Comment.create!(user_id: 4, site_id: 3, content: 'this place is GASSSSS' )

puts "#{Comment.count} comments created"
