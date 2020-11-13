const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3000;

app.use(express.static('public'));

app.get('/api/listings/:id/tours/categories', (req, res) => {
  const listingId = req.params.id;
  const sqlString = 'SELECT DISTINCT categories.id, categories.name, categories.description, tours.photo, tours.bookings FROM categories INNER JOIN tours ON categories.id = tours.categories_id INNER JOIN listings ON tours.listings_id = listings.id WHERE listings.id = ? ORDER BY tours.bookings DESC';
  db.query(sqlString, [listingId], (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/listings/:id/tours/categories/recommended', (req, res) => {
  // missing logic for getting languages
  const listingId = req.params.id;
  const sqlString = 'SELECT tours.id AS tours_id, tours.name AS tours_name, tours.* FROM tours INNER JOIN listings ON tours.listings_id = listings.id WHERE listings.id = ? ORDER BY tours.bookings DESC LIMIT 8';
  db.query(sqlString, [listingId], (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

app.get('/api/listings/:id/tours/categories/:categoryId', (req, res) => {
  // missing logic for getting languages
  const listingId = req.params.id;
  const categoryId = req.params.categoryId;
  const sqlString = 'SELECT tours.id AS tours_id, tours.name AS tours_name, tours.* FROM tours, listings, categories WHERE tours.listings_id = listings.id AND listings.id = ? AND categories.id = tours.categories_id AND categories.id = ? ORDER BY tours.bookings DESC LIMIT 8';
  db.query(sqlString, [listingId, categoryId], (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));