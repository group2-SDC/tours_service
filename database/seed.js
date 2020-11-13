const faker = require('faker');
const db = require('./index.js');
const Promise = require('bluebird');

const insert = (sqlString, values) => {
  return new Promise((resolve, reject) => {
    db.query(sqlString, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  });
};

const generateListings = (number) => {
  const promises = [];
  for (let i = 0; i < number; i++) {
    const name = faker.address.country();
    const sqlString = 'INSERT INTO listings (name) VALUES (?)';
    promises.push(insert(sqlString, [name]));
  }
  return Promise.all(promises);
};

const generateCategories = (number) => {
  const promises = [];
  for (let i = 0; i < number; i++) {
    const name = faker.commerce.department();
    const description = faker.company.catchPhrase();
    const sqlString = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    promises.push(insert(sqlString, [name, description]));
  }
  return Promise.all(promises);
};

const generateLanguages = (number) => {
  const promises = [];
  for (let i = 0; i < number; i++) {
    const language = faker.address.country();
    const sqlString = 'INSERT INTO languages (language) VALUES (?)';
    promises.push(insert(sqlString, [language]));
  }
  return Promise.all(promises);
};

const generateTours = (number, numberOfListings, numberOfCategories) => {
  const promises = [];
  for (let i = 0; i < number; i++) {
    const name = faker.commerce.productName();
    const company = faker.company.companyName();
    const description = faker.lorem.paragraph();
    const days = Math.floor(Math.random() * 5);
    const hours = Math.floor(Math.random() * 10);
    const minutes = Math.floor(Math.random() * 45);
    const base_price = faker.finance.amount();
    const free_cancel = Number(faker.random.boolean());
    const evoucher_accepted = Number(faker.random.boolean());
    const instant_confirm = Number(faker.random.boolean());
    const hotel_pickup = Number(faker.random.boolean());
    const reviews = faker.random.number();
    const avg_rating = Math.random() * 5;
    const bookings = faker.random.number();
    const favorite = 0;
    const listings_id = Math.floor(Math.random() * numberOfListings + 1);
    const categories_id = Math.floor(Math.random() * numberOfCategories + 1);
    const sqlString = 'INSERT INTO tours (name, company, description, days, hours, minutes, base_price, free_cancel, evoucher_accepted, instant_confirm, hotel_pickup, reviews, avg_rating, bookings, favorite, listings_id, categories_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    promises.push(insert(sqlString, [name, company, description, days, hours, minutes, base_price, free_cancel, evoucher_accepted, instant_confirm, hotel_pickup, reviews, avg_rating, bookings, favorite, listings_id, categories_id]));
  }
  return Promise.all(promises);
}

const generatePhotos = () => {
  db.query('SELECT * FROM listings', (err, listings) => {
    if (err) {
      console.log(err);
    } else {
      listings.forEach(listing => {
        const sqlString = 'UPDATE tours SET photo = ? WHERE listings_id = ?';
        insert(sqlString, [`https://loremflickr.com/320/240/${listing.name}`, listing.id]);
      });
    }
  });
};

const populateToursAndLangsTable = (numberOfLanguages) => {
  db.query('SELECT id from tours', (err, tours) => {
    if (err) {
      console.log(err);
    } else {
      tours.forEach(tour => {
        const numOfLangs = Math.floor(Math.random() * 5 + 1);
        for (let i = 0; i < numOfLangs; i++) {
          const sqlString = 'INSERT INTO tours_languages (tours_id, languages_id) VALUES (?, ?)';
          const languageId = Math.floor(Math.random() * numberOfLanguages + 1);
          insert(sqlString, [tour.id, languageId]);
        }
      });
    }
  });
};

const listings = 100;
const categories = 20;
const languages = 20;
const tours = 4000;

generateListings(listings)
  .then(() => {
    generateCategories(categories);
  })
  .then(() => {
    generateLanguages(languages);
  })
  .then(() => {
    generateTours(tours, listings, categories);
  })
  .then(() => {
    generatePhotos();
  })
  .then(() => {
    populateToursAndLangsTable(languages);
  })
  .catch(err => console.log(err));
