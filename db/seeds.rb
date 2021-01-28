# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.destroy_all

100.times do |i|
  Site.create!(name: "Site #{i+1}",image: "No url provided", description: 'no description provided' )
end

puts "#{Site.count} campsites created"