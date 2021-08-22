const http = require('http')
const axios = require('axios')

// setup server
// const server = http.createServer((req, res) => {
//     let data = ''
//     req.on('data', chunk => {
//         data += chunk
//     })
//     req.on('end', () => {
//         console.log(JSON.parse(data))
//         res.end(data)
//     })
// })

const server = http.createServer(async (req, res) => {
    const buffers = []
    // console.log(req)
    for await (const chunk of req) {
        buffers.push(chunk)
    }
    console.log(buffers)
    const dataString = Buffer.concat(buffers).toString()
    const data = JSON.parse(dataString)
    console.log(data)
    res.end(JSON.stringify(data))
})

const port = 3000
const hostname = 'localhost'
server.listen(port, hostname, () => {
    console.log('server started on port %d', port)
})

// Send request
