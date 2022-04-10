const express = require('express');

const app = express()

const PORT = 3000;

app.get('', (req, res) => {
    res.send('<h2>Hello!...</h2>')
})

app.get('/help', (req, res) => {
    res.send(
        [
            { Host: 'localhost', port: 3000 },
            { Host: '127.0.0.1', port: 3000 }
        ]
    )
})

app.get('/about', (req, res) => {
    res.send('<i>About page.</i>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'India',
        forecast: 'Haze (Humidity: 64% Wind: 18 km/h).'
    })
})



app.listen(PORT, () => {
    console.log('server started...');
})