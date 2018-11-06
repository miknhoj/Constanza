# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bathroom.destroy_all

john = User.create(username: "miknhoj", first_name: "John", last_name: "Kim", hometown: "Atlanta")

br1 = Bathroom.create(street: "", city: "", state: "", zip: "", baby_changing: true, toilets: 3, sinks: 4)

br1_rating = Rating.create(rating: 5, cleaniness: 4, privacy_level: 4, comment: "Very clean, but does get a lot of traffic", user_id: john.id, bathroom_id: br1.id)