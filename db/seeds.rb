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
bob = User.create(username: "bobby", first_name: "Bob", last_name: "Vance", hometown: "Scranton")

br1 = Bathroom.create(location_name: "Ponce City Market: East Wing", street: "675 Ponce De Leon Ave Ne", city: "Atlanta", state: "GA", zip: "30308", baby_changing: "yes", toilets: 3, sinks: 4)
br2 = Bathroom.create(location_name: "Ponce City Market: West Wing", street: "675 Ponce De Leon Ave Ne", city: "Atlanta", state: "GA", zip: "30308", baby_changing: "yes", toilets: 6, sinks: 6)
br3 = Bathroom.create(location_name: "QuikTrip", street: "855 Peachtree St NE", city: "Atlanta", state: "GA", zip: "30308", baby_changing: "no", toilets: 2, sinks: 1)

rating_1 = Rating.create(rating: 5, cleaniness: 4, privacy_level: 4, comment: "Very clean, but does get a lot of traffic", user_id: john.id, bathroom_id: br1.id)
rating_2 = Rating.create(rating: 4, cleaniness: 4, privacy_level: 3, comment: "Nice, fancy, well stocked, but quite busy", user_id: bob.id, bathroom_id: br1.id)
rating_3 = Rating.create(rating: 4, cleaniness: 4, privacy_level: 3, comment: "Large, a lot of stalls, but gets a lot of thru traffic.", user_id: john.id, bathroom_id: br2.id)
rating_4 = Rating.create(rating: 1, cleaniness: 1, privacy_level: 4, comment: "Disgusting!", user_id: john.id, bathroom_id: br3.id)