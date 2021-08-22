const fetch = require('node-fetch')


const status = response => {
    if(response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText))
}

// Produces parsed JSON
const json = response => response.json()

const url = "http://localhost:3000";

fetch(url)
    .then(status) // handle fetch() response that has status info
    .then(json)  // handle status() response that has json details as string
    .then(data => { // handle json() response that has parsed json
        console.log(`Data is ${data}`)
    })
    .catch(err => {
        //console.trace(err)
        // cascading errors
        throw new Error('Failed') 
    })
    .catch(err => console.log(err))