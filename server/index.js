const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3000;

app.use(express.static('public'));

// Retrieve all tour categories for a listing, in order of how many tours fall under that category
app.get('/api/listings/:id/tours/categories', (req, res) => {
  const listingId = req.params.id;
  const sqlCount = 'SELECT COUNT(tours.categories_id) AS tourCount, categories.* from tours, categories WHERE tours.categories_id = categories.id AND listings_id = ? GROUP BY categories_id ORDER BY COUNT(tours.categories_id) DESC';
  db.query(sqlCount, [listingId], (err, categoriesCount) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(categoriesCount);
    }
  });
});

// Retrieve the top photo for a tour category (photo for tour with most number of bookings)
app.get('/api/listings/:id/tours/categories/:categoryId/photo', (req, res) => {
  const listingId = req.params.id;
  const categoryId = req.params.categoryId;
  const sqlString = 'SELECT photo, bookings FROM tours WHERE listings_id = ? AND categories_id = ? ORDER BY bookings DESC LIMIT 1';

  db.query(sqlString, [listingId, categoryId], (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

// Retrieve the top 8 "recommended" tours, of any category (tours with the most number of bookings)
app.get('/api/listings/:id/tours/categories/recommended', (req, res) => {
  // missing logic for getting languages
  const listingId = req.params.id;
  const sqlString = 'SELECT tours.id AS id, tours.name AS name, tours.*, categories.name AS categories_name FROM tours, categories WHERE tours.listings_id = ? AND categories.id = tours.categories_id ORDER BY tours.bookings DESC LIMIT 8';
  db.query(sqlString, [listingId], (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

// Retrieve the top 8 tours per category (in order of number of bookings)
app.get('/api/listings/:id/tours/categories/:categoryId', (req, res) => {
  // missing logic for getting languages
  const listingId = req.params.id;
  const categoryId = req.params.categoryId;
  const sqlString = 'SELECT tours.id AS id, tours.name AS name, tours.*, categories.name AS categories_name FROM tours, categories WHERE tours.listings_id = ? AND categories.id = tours.categories_id AND categories.id = ? ORDER BY tours.bookings DESC LIMIT 8';
  db.query(sqlString, [listingId, categoryId], (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

// Update "favorite" status on a tour
app.patch('/api/listings/:id/tours/:tourId/:status', (req, res) => {
  const tourId = req.params.tourId;
  const newStatus = !req.params.status;
  const sqlString = 'UPDATE tours SET favorite = ? WHERE id = ?';
  db.query(sqlString, [newStatus, tourId], (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));