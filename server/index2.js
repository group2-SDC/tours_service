const express = require('express');
const app = express();
const path = require('path');
const pool = require('../database/index2.js')
const PORT = 3003;


var options = {
  setHeaders: (res, path, stat) => {
    res.set('Cache-Control', 'max-age=31536000');
  }
};

app.use('/:listing_id', express.static(path.resolve(__dirname, '..', 'public'), options));

app.get('/api/:listing_id/categories', async (req, res) => {
  const queryArg = [req.params.listing_id];
  const queryStr = 'select categories.id, categories.name, categories.description, categories.photo from categories inner join location_categories on categories.id = location_categories.category_id inner join listings on location_categories.location_id = listings.location_id where listings.id = $1'
  try {
    const { rows } = await pool.query(queryStr, queryArg);
    res.send(rows);
  } catch (err) {
    res.send(err)
  }
})

app.get('/api/:listing_id/recommended', async (req, res) => {
  const queryArg = [req.params.listing_id];
  const queryStr = 'select tours.id,tours.name,tours.company,tours.description,tours.days,tours.hours,tours.days,tours.hours,tours.minutes,tours.base_price,tours.free_cancel,tours.evoucher_accepted,tours.instant_confirm,tours.hotel_pickup,tours.reviews,tours.reviews,tours.avg_rating,tours.bookings,tours.languages,tours.favorite,tours.photo,tours.map,tours.category_id,tours.location_id from tours inner join listings on listings.location_id = tours.location_id where listings.id = $1 order by bookings desc limit 8'
  try {
    const { rows } = await pool.query(queryStr, queryArg);
    res.send(rows);
  } catch (err) {
    res.send(err)
  }
})

app.get('/api/:listing_id/:category_id', async (req, res) => {
  const queryArg = [req.params.listing_id, req.params.category_id];
  const queryStr = 'select tours.id,tours.name,tours.company,tours.description,tours.days,tours.hours,tours.days,tours.hours,tours.minutes,tours.base_price,tours.free_cancel,tours.evoucher_accepted,tours.instant_confirm,tours.hotel_pickup,tours.reviews,tours.reviews,tours.avg_rating,tours.bookings,tours.languages,tours.favorite,tours.photo,tours.map,tours.category_id,tours.location_id from tours inner join listings on listings.location_id = tours.location_id where listings.id = $1 AND tours.category_id = $2 order by bookings desc limit 8;'
  try {
    const { rows } = await pool.query(queryStr, queryArg);
    res.send(rows);
  } catch (err) {
    res.send(err)
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

