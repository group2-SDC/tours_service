const login = require('mysql.js');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: login.user,
  password: login.password,
  database: 'tripTours'
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('mysql connection success');
  }
});

module.exports = connection;
