const faker = require('faker');
const db = require('./index.js');

const generateListings = (number) => {
  for (let i = 0; i < number; i++) {
    const name = faker.address.country();
    const sqlString = 'INSERT INTO listings (name) VALUES (?)';
    db.query(sqlString, [name], (err, results) => {
      if (err) {
        console.log(err);
      }
    });
  };
}

const generateCategories = (number) => {
  for (let i = 0; i < number; i++) {
    const name = faker.commerce.department();
    const description = faker.company.catchPhrase();
    const sqlString = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    db.query(sqlString, [name, description], (err, results) => {
      if (err) {
        console.log(err);
      }
    });
  };
}

generateListings(100);
generateCategories(20);

// generate 20 languages and insert into languages table

// generate the following and insert into tours table
  // need to also assign category and listing ids, with random amounts assigned to each

  // name 
  // company
  // description
  // days
  // hours
  // minutes
  // base_price
  // free_cancel
  // evoucher_accepted
  // instant_confirm
  // hotel_pickup
  // reviews
  // avg_rating
  // bookings
 // note: set favorite to false for all tours

  // generate xx photos and insert into photo column of tours table