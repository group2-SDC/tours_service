const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'cassData2.csv';
const stream = fs.createWriteStream(filename);

let j = 1;

const createLangArray = () => {
  const popLangs = ['Mandarin Chinese', 'Spanish', 'English', 'Hindi', 'Bengali', 'Portuguese', 'Russian', 'Japanese', 'Korean', 'French', 'German', 'Vietnamese', 'Telugu', 'Turkish', 'Tamil'];
  const randomLang = faker.random.number({'min': 0, 'max': 14});
  return popLangs[randomLang];
}

const tourGen = () => {
  const listing_id = j;
  const location_id = faker.random.number({ 'min': 1, 'max': 1000});
  const category_id = faker.random.number({ 'min': 1, 'max': 30});
  const category_name = faker.commerce.department() + ' & ' + faker.commerce.department();
  const randomPhotoNumber1 = Math.ceil((Math.random() * 500)).toString().padStart(3, 0);
  const category_photo = `https://sdc-tours.s3-us-west-2.amazonaws.com/photo${randomPhotoNumber1}.jpg`;
  const category_description = faker.company.catchPhrase().slice(0, 40);
  const tours_id = j;
  const tours_name = faker.commerce.productName();
  const tours_company = faker.company.companyName();
  const tours_description = faker.lorem.paragraph();
  const tours_days = Math.ceil(Math.random() * 2);
  const tours_hours = Math.ceil(Math.random() * 10);
  const tours_minutes = Math.ceil(Math.random() * 45);
  const tours_base_price = faker.finance.amount().toFixed(2);
  const tours_free_cancel = Number(faker.random.boolean());
  const tours_evoucher_accepted = Number(faker.random.boolean());
  const tours_instant_confirm = Number(faker.random.boolean());
  const tours_hotel_pickup = Number(faker.random.boolean());
  const tours_reviews = Math.ceil(Math.random() * 1000);
  const tours_avg_rating = Math.random() * 5;
  const tours_bookings = Math.ceil(Math.random() * 8000);
  const tours_languages = createLangArray();
  const tours_favorite = 0;
  const randomPhotoNumber2 = Math.ceil((Math.random() * 500)).toString().padStart(3, 0);
  const tours_photo = `https://sdc-tours.s3-us-west-2.amatours_onaws.com/photo${randomPhotoNumber2}.jpg`;
  const randomMapNumber = Math.ceil((Math.random() * 500));
  const tours_map = `https://sdc-tours.s3-us-west-2.amatours_onaws.com/map${randomMapNumber}.jpg`;

  j++;

  return `${listing_id}|${location_id}|${category_id}|${category_name}|${category_description}|${category_photo}|${tours_id}|${tours_name}|${tours_company}|${tours_description}|${tours_days}|${tours_hours}|${tours_minutes}|${tours_base_price}|${tours_free_cancel}|${tours_evoucher_accepted}|${tours_instant_confirm}|${tours_hotel_pickup}|${tours_reviews}|${tours_avg_rating}|${tours_bookings}|${tours_languages}|${tours_favorite}|${tours_photo}|${tours_map}\n`;
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
          console.log('1mil generated')
        }
      }
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing()
}

stream.write('listing_id|location_id|category_id|category_name|category_description|category_photo|tours_id|tours_name|tours_company|tours_description|tours_days|tours_hours|tours_minutes|tours_base_price|tours_free_cancel|tours_evoucher_accepted|tours_instant_confirm|tours_hotel_pickup|tours_reviews|tours_avg_rating|tours_bookings|tours_languages|tours_favorite|tours_photo|tours_map\n', 'utf-8')
startWriting(stream, 'utf-8', () => {
  stream.end()
})