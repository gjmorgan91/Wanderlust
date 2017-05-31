var request = require('request');
var skyScan;

request.get({
  url: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/SAN/anywhere/anytime/?apiKey=sa302839589382574889837967187083",
  headers: "application/json"
}, function(err, response, body) {
  skyScan = JSON.parse(body);
  // console.log(skyScan);
})

// request.post({
//   url: "http://partners.api.skyscanner.net/apiservices/pricing/v1.0",
//   headers: {
//     Accept: "application/json",
//     ContentType: "application/x-www-form-urlencoded"
//   },
//   form:  {
//     cabinclass: "Economy",
//     country: "UK",
//     currency: "GBP",
//     locale: "en-GB",
//     locationSchema: "iata",
//     originplace: "EDI",
//     destinationplace: "LHR",
//     outbounddate: "2017-05-30",
//     inbounddate: "2017-06-02",
//     adults: "1",
//     children: "0",
//     infants: "0",
//     apikey: "sa822650917824688692115957251692"
//   }},
//   function(err, response, body) {
//     console.log("Making post request:");
//     // skyScan = JSON.parse(response.headers);
//     console.log(response.headers);
//     console.log(body);
//   })

// request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
