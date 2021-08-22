const https = require("https")
const util = require('util')


// const TextEncoder = new util.TextEncoder();

// let data = TextEncoder.encode(
//     JSON.stringify({ c: "Green" })
// )

// console.log(typeof data)
/*
data = JSON.stringify({ c: "Green"})

const options = {
    hostname: 'hrp-qr-api.herokuapp.com',
    port: 443,
    path: '/base64-encode',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`Status code: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
        // console.log(d.toString())
    })
})

req.on('error', error => {
    console.error(error)
})

// This is where you set the body
req.write(data)

req.end()
*/


// Using axios

const axios = require('axios')

const base64EncodedText = 'eyJjIjoiR3JlZW4ifQ=='
axios
    .post(
        'https://hrp-qr-api.herokuapp.com/base64-decode',
        base64EncodedText
    )
    .then(res => {
        console.log(`Status code: ${res.status}`)
        console.log(res.data)
    })
    .catch(err => console.error(err))