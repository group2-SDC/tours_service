const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000;
const filename = argv.output || 'pgLocationsData.csv';
const stream = fs.createWriteStream(filename);

let j = 1;

const locationGen = () => {
  let id = j;
  j++;
  return `${id}\n`;
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
        if (i === 999) {
          console.log('At 0%')
        } else if (i === 1) {
          console.log('1 entry left!')
        } else if (i % 100 === 0) {
          console.log('100 generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`id\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})