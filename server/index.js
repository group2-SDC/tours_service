const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}`));