const request = require('postman-request');

const access_token = "" // enter your access token

module.exports.getCoordinates = (data, callback) => {
    const MAPBOX_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20ngeles.json?access_token=" + access_token;
    request(MAPBOX_API_URL, (error, response) => {

        if (error) {
            callback('Unable to connect REST API');
        }
        else if (response.body.error) {
            callback('Unable to find location.');
        }
        else {
            const data = JSON.parse(response.body)
            if (data.features.length == 0) {
                callback('No match found!');
            }
            else {
                const logtitude = data.features[0].center[0]
                const latitude = data.features[0].center[1]
                const placeName = data.features[0].place_name
                callback({
                    logtitude: logtitude,
                    latitude: latitude,
                    placeName: placeName
                })
            }
        }
    })
}