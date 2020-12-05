const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'pgListingsData.csv';
const stream = fs.createWriteStream(filename);

const listingGen = () => {
  const location_id = faker.random.number(100000);

  return `${location_id}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing () {
    let canWrite = true;
    do {
      i--;
      let listing = listingGen();
      if (i === 0) {
        writeStream.write(listing, encoding, done);
      } else {
        writeStream.write(listing, encoding);
        if (i === 9999999) {
          console.log('At 0%')
        } else if (i === 1) {
          console.log('1 entry left!')
        } else if (i % 1000000 === 0) {
          console.log('Mil generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`location_id\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})