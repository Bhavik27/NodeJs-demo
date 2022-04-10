const https = require('https');

const httpRequest = https.request('https://api.nationalize.io/?name=james', (response) => {
    let data;
    response.on('data', (res) => {
        data = res.toString();
    })
    response.on('end', () => {
        console.log(JSON.parse(data));
    })
})

httpRequest.on('error', (err) => {
    console.log(err);
})

httpRequest.end()