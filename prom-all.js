// Synchronize different promises

const p1 = new Promise((resolve, reject) => {
    resolve('P1 resolved')
    // reject('P1 rejected')
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 resolved')
    // reject('P2 rejected')
})

Promise.all([p1, p2])
    .then(([v1, v2]) => {
        console.log(v1)
        console.log(v2)
    })
    .catch(err => {
        console.trace(err)
    })
















