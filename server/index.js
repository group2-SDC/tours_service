const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const db = require('../database/index.js');
const port = 3002;
const Promise = require('bluebird');

app.use(morgan('dev'));

app.use('/:listing_id', express.static('public'));

// Retrieve all tour categories for a listing, in order of how many tours fall under that category
app.get('/api/listings/:listing_id/tours/categories', (req, res) => {
  const listingId = req.params.listing_id;
  const sqlCount = 'SELECT COUNT(tours.categories_id) AS tourCount, categories.* from tours, categories WHERE tours.categories_id = categories.id AND listings_id = ? GROUP BY categories_id ORDER BY COUNT(tours.categories_id) DESC';
  db.query(sqlCount, [listingId], (err, categories) => {
    if (err) {
      res.sendStatus(404);
    } else {
      // For each category, select the photo associated with the tour with most number of bookings in that category, and add to category obj being sent back to client
      const categoryPromises = categories.map(category => {
        return new Promise((resolve, reject) => {
          const sqlPhoto = 'SELECT photo, bookings FROM tours WHERE listings_id = ? AND categories_id = ? ORDER BY bookings DESC LIMIT 1';
          db.query(sqlPhoto, [listingId, category.id], (err, photo) => {
            if (err) {
              reject(err);
            } else {
              category.photo = photo[0].photo;
              resolve(category);
            }
          });
        });
      });
      // Once all of the async calls to the database to retrieve the photo for each category are done, send categories to client
      Promise.all(categoryPromises)
        .then(categories => res.send(categories))
        .catch(err => {
          console.log(err);
          res.sendStatus(404);
        });
    }
  });
});

// Retrieve the top 8 "recommended" tours, of any category (tours with the most number of bookings)
app.get('/api/listings/:listing_id/tours/categories/recommended', (req, res) => {
  const listingId = req.params.listing_id;
  const sqlString = 'SELECT tours.id AS id, tours.name AS name, tours.*, categories.name AS categories_name FROM tours, categories WHERE tours.listings_id = ? AND categories.id = tours.categories_id ORDER BY tours.bookings DESC LIMIT 8';
  db.query(sqlString, [listingId], (err, tours) => {
    if (err) {
      res.sendStatus(404);
    } else {
      // For each tour, query the database to determine which languages are offered for that tour, and add those languages to the tour object
      const tourPromises = tours.map(tour => {
        return new Promise((resolve, reject) => {
          const sqlLangs = 'SELECT DISTINCT languages.* from tours_languages, languages WHERE tours_languages.languages_id = languages.id AND tours_languages.tours_id = ?';
          db.query(sqlLangs, [tour.id], (err, langs) => {
            if (err) {
              reject(err);
            } else {
              tour.langs_offered = langs;
              resolve(tour);
            }
          });
        });
      });
      // Once all of the async calls to the database to retrieve the languages for each tour are done, send tours to client
      Promise.all(tourPromises)
        .then(tours => res.send(tours))
        .catch(err => {
          console.log(err);
          res.sendStatus(404);
        });
    }
  });
});

// Retrieve the top 8 tours per category (in order of number of bookings)
app.get('/api/listings/:listing_id/tours/categories/:category_id', (req, res) => {
  const listingId = req.params.listing_id;
  const categoryId = req.params.category_id;
  const sqlString = 'SELECT tours.id AS id, tours.name AS name, tours.*, categories.name AS categories_name FROM tours, categories WHERE tours.listings_id = ? AND categories.id = tours.categories_id AND categories.id = ? ORDER BY tours.bookings DESC LIMIT 8';
  db.query(sqlString, [listingId, categoryId], (err, tours) => {
    if (err) {
      res.sendStatus(404);
    } else {
      // For each tour, query the database to determine which languages are offered for that tour, and add those languages to the tour object
      const tourPromises = tours.map(tour => {
        return new Promise((resolve, reject) => {
          const sqlLangs = 'SELECT DISTINCT languages.* from tours_languages, languages WHERE tours_languages.languages_id = languages.id AND tours_languages.tours_id = ?';
          db.query(sqlLangs, [tour.id], (err, langs) => {
            if (err) {
              reject(err);
            } else {
              tour.langs_offered = langs;
              resolve(tour);
            }
          });
        });
      });
      // Once all of the async calls to the database to retrieve the languages for each tour are done, send tours to client
      Promise.all(tourPromises)
        .then(tours => res.send(tours))
        .catch(err => {
          console.log(err);
          res.sendStatus(404);
        });
    }
  });
});

// // Update "favorite" status on a tour
// app.patch('/api/listings/:id/tours/:tourId/:status', (req, res) => {
//   const tourId = req.params.tourId;
//   const newStatus = !req.params.status;
//   const sqlString = 'UPDATE tours SET favorite = ? WHERE id = ?';
//   db.query(sqlString, [newStatus, tourId], (err, results) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// });

app.listen(port, () => console.log(`listening on port ${port}`));