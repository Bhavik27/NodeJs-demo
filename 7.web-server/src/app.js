const path = require('path')

const express = require('express');
const hbs = require('hbs');
const app = express()

const PORT = 3000;

// define path to express config
const PUBLIC_DIRECTORY = path.join(__dirname, '../public/')
const VIEW_TEMPLATES = path.join(__dirname, '../templates/')
const PARTIALS = path.join(__dirname, '../templates/partials')

// setup handlers engine and view locations
app.set('view engine', 'hbs')
app.set('views', VIEW_TEMPLATES)
hbs.registerPartials(PARTIALS)

// setup static directory to use
app.use(express.static(PUBLIC_DIRECTORY))


app.get('', (req, res) => {
    res.render('index', {
        title: 'APPLICATION',
        createdBy: 'Bhavik'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT US',
        createdBy: 'Bhavik'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP',
        helpMessage: 'You need some help?',
        createdBy: 'Bhavik'
    })
})



app.get('/weather', (req, res) => {
    res.send({
        location: 'India',
        forecast: 'Haze (Humidity: 64% Wind: 18 km/h).'
    })
})

app.get('/products', (req, res) => {
    if (!req.query.product) {
        res.send({ message: 'You must provide search terms.' })
    }
    else {
        res.send({
            products: req.query.product
        })
    }



})


app.get('/weather/*', (req, res) => {
    res.send("No weather content found")
})

app.get('*', (req, res) => {
    res.send("404 Page")
})



app.listen(PORT, () => {
    console.log('server started...');
})