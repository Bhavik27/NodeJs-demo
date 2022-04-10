const path = require('path')

const express = require('express');
const app = express()

const PORT = 3000;

// define path to express config
const PUBLIC_DIRECTORY = path.join(__dirname, '../public/')
const VIEW_TEMPLATES = path.join(__dirname, '../templates/')

// setup handlers engine and view locations
app.set('view engine', 'hbs')
app.set('views', VIEW_TEMPLATES)

// setup static directory to use
app.use(express.static(PUBLIC_DIRECTORY))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Node App',
        Heading: 'Static page - HBS'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        createdBy: 'Bhavik'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        createdBy: 'Bhavik'
    })
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