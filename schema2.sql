DROP DATABASE IF EXISTS tours_component;

CREATE DATABASE tours_component;

\c tours_component;

CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  avail_categories SMALLINT[]
);

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  location_id SMALLINT,
  CONSTRAINT fk_location
    FOREIGN KEY (location_id)
      REFERENCES locations(id)
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  description VARCHAR
);

CREATE TABLE IF NOT EXISTS tours (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  company VARCHAR,
  description VARCHAR,
  days SMALLINT,
  hours SMALLINT,
  minutes SMALLINT,
  base_price VARCHAR,
  free_cancel SMALLINT,
  evoucher_accepted SMALLINT,
  instant_confirm SMALLINT,
  hotel_pickup SMALLINT,
  reviews SMALLINT,
  avg_rating DECIMAL(10, 2),
  bookings SMALLINT,
  languages VARCHAR[],
  favorite SMALLINT,
  photo VARCHAR(500),
  map VARCHAR(500),
  category_id SMALLINT,
  CONSTRAINT fk_category
    FOREIGN KEY (category_id)
       REFERENCES categories(id),
  location_id SMALLINT,
  CONSTRAINT fk_location
    FOREIGN KEY (location_id)
      REFERENCES locations(id)
);