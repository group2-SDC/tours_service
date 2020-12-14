const fs = require('fs');
const axios = require('axios');
const path = require('path');

const PATH = path.join(__dirname, '/maps');
const url = 'https://loremflickr.com/896/508/map';

const padNum = (number, size) => {
  const result = `000${number}`;
  return result.substr(-size);
};

const getImage = (fileName) => {
  const WRITE_PATH = path.join(PATH, `map${fileName}.jpg`);
  axios.get(url, { responseType: 'stream' })
    .then((response) => {
      const stream = response.data;
      return stream.pipe(fs.createWriteStream(WRITE_PATH));
    })
    .catch((err) => {
      return (err);
    });
};

const downloadImages = (times) => {
  let timer = 0;

  for (let counter = 1; counter < times; counter++) {
    const fileName = counter
    setTimeout(() => getImage(fileName), timer);
    timer += 2000;
  }
};

downloadImages(501);