// Promise.race runs with the result of the first resolved promise


// resolves last
const first = new Promise((resolve, reject) => {
    setTimeout((label) => {
        reject('first failed') // this reject comes in late so it wont be handled
        console.log('label is', label) // this log will be logged though
        resolve(label)
    }, 300, 'first')
})

// resolves first
const second = new Promise((resolve, reject) => {
    setTimeout((label) => {
        reject('second failed')
        console.log('Label is', label)
        resolve(label)
    }, 100, 'second')
})


Promise.race([first, second]).then(result => {
    console.log(result)
})
.catch(err => console.trace(err))












