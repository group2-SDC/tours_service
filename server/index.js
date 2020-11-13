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

app.listen(port, () => console.log(`listening on port ${port}`));