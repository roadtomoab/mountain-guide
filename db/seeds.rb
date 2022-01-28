# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Mountain.destroy_all
User.destroy_all
Rating.destroy_all
Favorite.destroy_all

puts "Seeding mountains..."
Mountain.create!([
    {
        summary: "Sick mountain brah",
        pass_info: "ikon pass",
        avg_snowfall: 300.00,
        best_for: "serious skiers",
        name: "Winter Park",
        image_url: "https://photos.jemphotography.com/rocky-mountain-national-park-trail-ridge-notch_256x.png"
    },
    {
        summary: "Sick mountain brah",
        pass_info: "epic pass",
        avg_snowfall: 220.00,
        best_for: "skiers of all types",
        name: "Breckenridge",
        image_url: "https://photos.jemphotography.com/rocky-mountain-national-park-trail-ridge-notch_256x.png"

    },
    {
        summary: "Sick mountain brah",
        pass_info: "epic pass",
        avg_snowfall: 374.00,
        best_for: "skiers of all types",
        name: "Vail",
        image_url: "https://photos.jemphotography.com/rocky-mountain-national-park-trail-ridge-notch_256x.png"
    }
])

puts "Seeding users..."
User.create!([
    {
        username: "noahblum",
        password_digest: "123",
        email: "noah.blumenstein@gmail.com"
    },
    {
        username: "mrbean",
        password_digest: "123",
        email: "mrbean"
    },
    {
        username: "earthisflat",
        password_digest: "123",
        email: "earthisflat"
    },
    {
        username: "bobby",
        password_digest: "123",
        email: "bobby"
    }
])

puts "Seeding ratings..."
Rating.create!([
    {
        town_rating: 8.2,
        ski_rating: 7.5,
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        town_rating: 9.2,
        ski_rating: 6.5,
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        town_rating: 5.2,
        ski_rating: 9.7,
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        town_rating: 3.5,
        ski_rating: 8.7,
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        town_rating: 5.0,
        ski_rating: 6.9,
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        town_rating: 8.2,
        ski_rating: 7.5,
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    }
])

puts "Seeding favorites..."
Favorite.create([
    {
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    },
    {
        mountain_id: rand(1..3),
        user_id: rand(1..4)
    }
])
