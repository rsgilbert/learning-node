// See https://nodejs.dev/learn#an-example-nodejs-application

const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({title: 'Hello World!\n'}));
});




server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})






