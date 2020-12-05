const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'pgCategoriesData.csv';
const stream = fs.createWriteStream(filename);

const locationGen = () => {
  const numCat = faker.random.number({'min': 11, 'max': 16});
  let avail_categories = [];
  for (let i = 0; i < numCat; i++) {
    avail_categories.push(faker.random.number(100));
  }
  return `${avail_categories}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing () {
    let canWrite = true;
    do {
      i--;
      let location = locationGen();
      if (i === 0) {
        writeStream.write(location, encoding, done);
      } else {
        writeStream.write(location, encoding);
        if (i === 99999) {
          console.log('At 0%')
        } else if (i === 1) {
          console.log('1 entry left!')
        } else if (i % 10000 === 0) {
          console.log('10000 generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`avail_categories\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})