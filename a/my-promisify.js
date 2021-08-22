const fs = require('fs')

const getFile = fileName => {
    console.log('getting', fileName)
    return new Promise((resolve, reject) => {
        console.log('within promise')
        fs.readFile(fileName, (err, data) => {
            console.log('ready to respond')
            if(err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}


console.log('going to call getFile')
getFile('./prom.js')
    .then(data => {
        console.log(data.toString())
    })
    .catch(err => {
        console.trace(err)
    })
console.log('line 25')




