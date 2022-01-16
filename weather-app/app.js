const request = require('postman-request');

const access_token = "  " // enter your access token
const MAPBOX_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + access_token;

request(MAPBOX_API_URL, (error, response) => {
    if (error) {
        console.log('Unable to connect REST API');
    }
    else {
        const data = JSON.parse(response.body)
        const logtitude = data.features[0].center[0]
        const latitude = data.features[0].center[1]
        console.log(logtitude + "," + latitude);
    }
})