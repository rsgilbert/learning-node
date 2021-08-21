const fs = require('fs')

const getFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

getFile('./prom.js')
    .then(data => {
        console.log(data.toString())
    })
    .catch(err => {
        console.trace(err)
    })




