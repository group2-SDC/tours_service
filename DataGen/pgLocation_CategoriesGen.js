const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 14500;
const filename = argv.output || 'pgLocation_CategoriesData.csv';
const stream = fs.createWriteStream(filename);

let j = 1;
let numCat = faker.random.number({'min': 11, 'max': 16});
let count = 0;
let curr_categories = [];

const location_CategoriesGen = () => {
  let unique = false;
  if (count === numCat) {
    j++;
    count = 0;
    numCat = faker.random.number({'min': 11, 'max': 16});
    curr_categories = [];
  } else {
    count++;
  }
  let location_id = j;
  let category_id = faker.random.number({'min': 1, 'max': 30});
  while (unique === false) {
    if (!curr_categories.includes(category_id)) {
      curr_categories.push(category_id);
      unique = true;
    } else {
      category_id = faker.random.number({'min': 1, 'max': 30});
    }
  }

  return `${location_id}|${category_id}\n`;

}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing () {
    let canWrite = true;
    do {
      i--;
      let location_category = location_CategoriesGen();
      if (i === 0) {
        writeStream.write(location_category, encoding, done);
      } else {
        writeStream.write(location_category, encoding);
        if (i === 1599) {
          console.log('At 0%')
        } else if (i === 1) {
          console.log('1 entry left!')
        } else if (i % 1000 === 0) {
          console.log('1000 generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`location_id|category_id\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})