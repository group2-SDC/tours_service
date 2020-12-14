import http from 'k6/http';
import { check } from 'k6';

export let options = {
  duration: '300s',
  vus: 25,
};


export default function () {
  const index = Math.ceil(Math.random() * 100000000)
  const response = http.get(`http://127.0.0.1:3002/api/listings/${index}/tours/categories/`);
  check(response, {
    'response was successful (status code 200)': (response) => response.status === 200,
    'response duration was less than 2s': (response) => response.timings.duration < 2000,
  });
}