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
    const name = faker.commerce.department() + ' & ' + faker.commerce.department();
    const description = faker.company.catchPhrase().slice(0, 30);
    const sqlString = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    promises.push(insert(sqlString, [name.slice(0, 20), description]));
  }
  return Promise.all(promises);
};

const generateLanguages = () => {
  const promises = [];
  const popLangs = ['Mandarin Chinese', 'Spanish', 'English', 'Hindi', 'Bengali', 'Portuguese', 'Russian', 'Japanese', 'Korean', 'French', 'German', 'Vietnamese', 'Telugu', 'Turkish', 'Tamil'];
  for (let i = 0; i < popLangs.length; i++) {
    const language = popLangs[i];
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
    const days = Math.floor(Math.random() * 2);
    const hours = Math.floor(Math.random() * 10);
    const minutes = Math.floor(Math.random() * 45);
    const base_price = faker.finance.amount().toFixed(2);
    const free_cancel = Number(faker.random.boolean());
    const evoucher_accepted = Number(faker.random.boolean());
    const instant_confirm = Number(faker.random.boolean());
    const hotel_pickup = Number(faker.random.boolean());
    const reviews = Math.floor(Math.random() * 1000);
    const avg_rating = Math.random() * 5;
    const bookings = Math.floor(Math.random() * 8000);
    const favorite = 0;
    const randomPhotoNumber = Math.floor((Math.random() * 100) + 1).toString().padStart(3, 0);
    const photo = `https://fec-project-images.s3-us-west-2.amazonaws.com/images/${randomPhotoNumber}.jpg`;
    const randomMapNumber = Math.floor((Math.random() * 10) + 1);
    const map = `https://fec-project-images.s3-us-west-2.amazonaws.com/maps/map_${randomMapNumber}.jpg`;
    const listings_id = Math.floor(Math.random() * numberOfListings + 1);
    const categories_id = Math.floor(Math.random() * numberOfCategories + 1);
    const sqlString = 'INSERT INTO tours (name, company, description, days, hours, minutes, base_price, free_cancel, evoucher_accepted, instant_confirm, hotel_pickup, reviews, avg_rating, bookings, favorite, photo, map, listings_id, categories_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    promises.push(insert(sqlString, [name, company, description, days, hours, minutes, base_price, free_cancel, evoucher_accepted, instant_confirm, hotel_pickup, reviews, avg_rating, bookings, favorite, photo, map, listings_id, categories_id]));
  }
  return Promise.all(promises);
}

const populateToursAndLangsTable = () => {
  db.query('SELECT id from tours', (err, tours) => {
    if (err) {
      console.log(err);
    } else {
      tours.forEach(tour => {
        const numOfLangs = Math.floor(Math.random() * 3 + 1);
        for (let i = 0; i < numOfLangs; i++) {
          const sqlString = 'INSERT INTO tours_languages (tours_id, languages_id) VALUES (?, ?)';
          const languageId = Math.floor(Math.random() * 15 + 1);
          insert(sqlString, [tour.id, languageId]);
        }
      });
    }
  });
};

const listings = 100;
const categories = 12;
const tours = 5000;

generateListings(listings)
  .then(() => {
    generateCategories(categories);
  })
  .then(() => {
    generateLanguages();
  })
  .then(() => {
    generateTours(tours, listings, categories);
  })
  .then(() => {
    populateToursAndLangsTable();
  })
  .catch(err => console.log(err));