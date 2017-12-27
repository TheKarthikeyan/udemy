// const yargs = require('yargs')
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// forecast-api key: ffe4f0930d48d353e84d53bbf52ffa99

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/ffe4f0930d48d353e84d53bbf52ffa99/11.0948328,77.04493269999999`,
  json: true
},(error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather');
  }

});
