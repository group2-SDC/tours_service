CREATE DATABASE tripTours;

USE tripTours;

CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250)
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250),
  description VARCHAR(500)
);

CREATE TABLE tours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(250),
  company VARCHAR(100),
  description VARCHAR(500),
  days INT,
  hours INT,
  minutes INT,
  base_price DECIMAL(10, 2),
  free_cancel INT,
  evoucher_accepted INT,
  instant_confirm INT,
  hotel_pickup INT,
  reviews INT,
  avg_rating DECIMAL(10, 2),
  bookings INT,
  favorite INT,
  photo VARCHAR(500),
  listings_id INT,
  categories_id INT,
  FOREIGN KEY (listings_id) REFERENCES listings(id),
  FOREIGN KEY (categories_id) REFERENCES categories(id)
);

CREATE TABLE languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  language VARCHAR(100)
);

CREATE TABLE tours_languages (
  tours_id INT,
  languages_id INT,
  FOREIGN KEY (tours_id) REFERENCES tours(id),
  FOREIGN KEY (languages_id) REFERENCES languages(id)
);


