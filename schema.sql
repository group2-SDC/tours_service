CREATE DATABASE tripAdvisor;

USE tripAdvisor;

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
  langs_offered JSON,
  free_cancel INT,
  evoucher_accepted INT,
  instant_confirm INT,
  hotel_pickup INT,
  reviews INT,
  avg_rating DECIMAL(10, 2),
  bookings INT,
  favorite INT,
  photo VARCHAR(500),
  listing_id INT,
  category_id INT,
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);


