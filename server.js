const http = require('http')
const port = 4000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello you </h1>')
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})