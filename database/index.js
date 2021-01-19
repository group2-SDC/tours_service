const { Pool } = require('pg');
const pass = require('./dbpass.js')

const pool = new Pool({
  user: pass.user,
  database: pass.database,
  password: pass.password
})

pool.connect()
  .then(success => {
    console.log('connected to db');
  })
  .catch (err => {
    console.log('could not connect to db err: ', err);
  })

module.exports = pool;