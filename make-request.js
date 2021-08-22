const https = require('https')

const options = {
    hostname: 'hrp-qr-api.herokuapp.com',
    port: 443,
    path: '/',
    method: 'GET'
}

const req = https.request(options, res => {
    res.on('data', d => {
        console.log('data is ',d)
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.log(error)
})

req.end()