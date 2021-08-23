// const id = setInterval(() => {
//     console.log('Hello')
// }, 500)

// setTimeout(() => clearInterval(id), 2005)

// let count = 0
// const intervalId = setInterval(() => {
//     if(count === 10) {
//         clearInterval(intervalId)
//     }
//     console.log(++count)
// }, 10);

// Recursive timeout

let c = 0
const f2 = () => {
    c++
    console.log('c is', c)
    if(c !== 5) {
        setTimeout(f2, 600)
    }
}

setTimeout(f2, 600)