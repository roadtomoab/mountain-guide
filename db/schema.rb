# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_25_172133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.bigint "mountain_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["mountain_id"], name: "index_favorites_on_mountain_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "mountains", force: :cascade do |t|
    t.text "summary"
    t.string "pass_info"
    t.float "avg_snowfall"
    t.float "town_rating"
    t.float "ski_rating"
    t.string "best_for"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "town_rating"
    t.integer "ski_rating"
    t.bigint "mountain_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["mountain_id"], name: "index_ratings_on_mountain_id"
    t.index ["user_id"], name: "index_ratings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
  end

  add_foreign_key "favorites", "mountains"
  add_foreign_key "favorites", "users"
  add_foreign_key "ratings", "mountains"
  add_foreign_key "ratings", "users"
end
