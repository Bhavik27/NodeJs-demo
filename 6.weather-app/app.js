var weatherstackAPI = require('./weatherstack')
var mapBoxAPI = require('./mapbox')


// weatherstackAPI.getLocation()
mapBoxAPI.getCoordinates('', (data, err) => {
    if (err) {
        console.log('Error : ' + JSON.stringify(err));
    }
    else {
        console.log(data);
    }
})