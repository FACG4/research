# Make a request from the server
By: Sallam-AbdelSamad-Marwa-Ahmed


</br>


##### Why would I ever do a HTTP request?
The answer is simple: as a Javascript developer you will interact every day with remote APIs and webservers. Almost everything today is available in the form of an API: weather forecasts, geolocation services and so on.
<br>

##### What are the modules are available to make a request from a node server to another server?

i. The request module:


``` js
const request = require("request");
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
request.get(url, (error, response, body) => {
 let json = JSON.parse(body);
 let status = json.status;


 console.log(
   `City: ${json.results[0].formatted_address} -`,
   `Latitude: ${json.results[0].geometry.location.lat} -`,
   `Longitude: ${json.results[0].geometry.location.lng}-`,
   `Status is ${status}`
 );
});
```

ii. The node-fetch module:
``` js
const fetch = require("node-fetch");
const url =   "https://maps.googleapis.com/maps/api/geocode/json?address=USA";
fetch(url)
  .then(response => {
    response.json().then(json => {
      console.log(
        `City: ${json.results[0].formatted_address} -`,
        `Latitude: ${json.results[0].geometry.location.lat} -`,
        `Longitude: ${json.results[0].geometry.location.lng}`
      );
    });
  })
  .catch(error => {
    console.log(error);
  });
```
iii. axios module:</br>
is another super popular NPM module for making HTTP requests. It supports promises by default. Axios can be used both for the frontend and the backend and one of its core feature is the ability to transform both the request and the response. Plus you don’t need to explicitly process the response in order to get the JSON as you did with node-fetch: axios will do it automagically.
```js
onst axios = require("axios");
const url =
"https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
axios
.get(url)
.then(response => {
console.log(
City: ${response.data.results[0].formatted_address} -,
Latitude: ${response.data.results[0].geometry.location.lat} -,
Longitude: ${response.data.results[0].geometry.location.lng}
);
})
.catch(error => {
console.log(error);
});
```
iv. superagent module
``` js
const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
.query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
.end((err, res) => {
if (err) { return console.log(err); }
console.log(res.body.url);
console.log(res.body.explanation);
}); `
```
