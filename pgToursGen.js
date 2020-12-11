const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 10000000;
const filename = argv.output || 'pgToursData.csv';
const stream = fs.createWriteStream(filename);

let j = 1;

const createLangArray = () => {
  const popLangs = ['Mandarin Chinese', 'Spanish', 'English', 'Hindi', 'Bengali', 'Portuguese', 'Russian', 'Japanese', 'Korean', 'French', 'German', 'Vietnamese', 'Telugu', 'Turkish', 'Tamil'];
  const ranNum = faker.random.number({'min': 0, 'max': 14});
  return popLangs[ranNum];
}

const tourGen = () => {
  const id = j;
  j++;
  const name = faker.commerce.productName();
  const company = faker.company.companyName();
  const description = faker.lorem.paragraph();
  const days = Math.ceil(Math.random() * 2);
  const hours = Math.ceil(Math.random() * 10);
  const minutes = Math.ceil(Math.random() * 45);
  const base_price = faker.finance.amount().toFixed(2);
  const free_cancel = Number(faker.random.boolean());
  const evoucher_accepted = Number(faker.random.boolean());
  const instant_confirm = Number(faker.random.boolean());
  const hotel_pickup = Number(faker.random.boolean());
  const reviews = Math.ceil(Math.random() * 1000);
  const avg_rating = Math.random() * 5;
  const bookings = Math.ceil(Math.random() * 8000);
  const languages = createLangArray();
  const favorite = 0;
  const randomPhotoNumber = Math.ceil((Math.random() * 500)).toString().padStart(3, 0);
  const photo = `https://sdc-tours.s3-us-west-2.amazonaws.com/photo${randomPhotoNumber}.jpg`;
  const randomMapNumber = Math.ceil((Math.random() * 500));
  const map = `https://sdc-tours.s3-us-west-2.amazonaws.com/map${randomMapNumber}.jpg`;
  const category_id = faker.random.number({ 'min': 1, 'max': 30});
  const location_id = faker.random.number({ 'min': 1, 'max': 1000});

  return `${id}|${name}|${company}|${description}|${days}|${hours}|${minutes}|${base_price}|${free_cancel}|${evoucher_accepted}|${instant_confirm}|${hotel_pickup}|${reviews}|${avg_rating}|${bookings}|${languages}|${favorite}|${photo}|${map}|${category_id}|${location_id}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines
  function writing () {
    let canWrite = true;
    do {
      i--;
      let tour = tourGen();
      if (i === 0) {
        writeStream.write(tour, encoding, done);
      } else {
        writeStream.write(tour, encoding);
        if (i === 9999999) {
          console.log('At 0%')
        } else if (i === 1) {
          console.log('1 entry left!')
        } else if (i % 1000000 === 0) {
          console.log('1 Mil generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write(`id|name|company|description|days|hours|minutes|base_price|free_cancel|evoucher_accepted|instant_confirm|hotel_pickup|reviews|avg_rating|bookings|languages|favorite|photo|map|category_id|location_id\n`, 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})