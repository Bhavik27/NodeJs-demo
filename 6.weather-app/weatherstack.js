const request = require('postman-request');

const access_key = "" // enter your access Token
const WEATHER_API_URL = "http://api.weatherstack.com/current?access_key=" + access_key + "&query=23.0225,72.5714"

module.exports.getLocation = () => request(WEATHER_API_URL, (error, response) => {
    if (error) {
        console.log('Unable to connect REST API');
    }
    else {
        const data = JSON.parse(response.body)
        const location = data.location;
        const currentData = { temperature: data.current.temperature, weather_descriptions: data.current.weather_descriptions }
        console.log(location);
        console.log(currentData);
    }
})
