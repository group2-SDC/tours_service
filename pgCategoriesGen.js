const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 30;
const filename = argv.output || 'pgCategoriesData.csv';
const stream = fs.createWriteStream(filename);

let j = 1;
const categoryGen = () => {
  const id = j;
  const name = faker.commerce.department() + ' & ' + faker.commerce.department();
  const description = faker.company.catchPhrase().slice(0, 40);
  j++;
  const randomPhotoNumber = Math.ceil((Math.random() * 500)).toString().padStart(3, 0);
  const photo = `https://sdc-tours.s3-us-west-2.amazonaws.com/photo${randomPhotoNumber}.jpg`;
  return `${id}|${name}|${description}|${photo}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing () {
    let canWrite = true;
    do {
      i--;
      let category = categoryGen();
      if (i === 0) {
        writeStream.write(category, encoding, done);
      } else {
        writeStream.write(category, encoding);
        if (i === 29) {
          console.log('At 0%')
        } else if (i === 1) {
          console.log('1 entry left!')
        } else if (i % 10 === 0) {
          console.log('10 generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`id|name|description|photo\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})