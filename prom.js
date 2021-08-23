// Promises
// https://nodejs.dev/learn/understanding-javascript-promises

let done = false


const isItDoneYet = new Promise((resolve, reject) => {
    if(done) {
       resolve('Yes, its done')
    } else {
        reject('Not yet')
    }
})

const checkDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
    console.log('Gone with the wind')
}

checkDone()