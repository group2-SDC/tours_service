const faker = require('faker');
const db = require('./index.js');

const insert = (sqlString, values) => {
  db.query(sqlString, values, (err, results) => {
    if (err) {
      console.log(err);
    }
  });
};

const generateListings = (number) => {
  for (let i = 0; i < number; i++) {
    const name = faker.address.country();
    const sqlString = 'INSERT INTO listings (name) VALUES (?)';
    insert(sqlString, [name]);
  }
};

const generateCategories = (number) => {
  for (let i = 0; i < number; i++) {
    const name = faker.commerce.department();
    const description = faker.company.catchPhrase();
    const sqlString = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    insert(sqlString, [name, description]);
  }
};

const generateLanguages = (number) => {
  for (let i = 0; i < number; i++) {
    const language = faker.address.country();
    const sqlString = 'INSERT INTO languages (language) VALUES (?)';
    insert(sqlString, [language]);
  }
};

// generateListings(100);
// generateCategories(15);
// generateLanguages(20);

const generateTours = (number) => {
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
    const sqlString = 'INSERT INTO tours (name, company, description, days, hours, minutes, base_price, free_cancel, evoucher_accepted, instant_confirm, hotel_pickup, reviews, avg_rating, bookings, favorite) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    insert(sqlString, [name, company, description, days, hours, minutes, base_price, free_cancel, evoucher_accepted, instant_confirm, hotel_pickup, reviews, avg_rating, bookings, favorite]);
  }
}

generateTours(10);


// generate xx photos and insert into photo column of tours table