const path = require('path')
const express = require('express');

const app = express()

const PORT = 3000;
const PUBLIC_DIRECTORY = path.join(__dirname, '../public/')



app.use(express.static(PUBLIC_DIRECTORY))

app.get('/weather', (req, res) => {
    res.send({
        location: 'India',
        forecast: 'Haze (Humidity: 64% Wind: 18 km/h).'
    })
})



app.listen(PORT, () => {
    console.log('server started...');
})