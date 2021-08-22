// // # async - await


// // An async function returns a promise
// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('Hi'), 500)
//     })
// }

// const doSth = async () => {
//     console.log(await doSomethingAsync())
//     let p = await doSomethingAsync()
//     return p
// }


// let k = doSth()

// console.log('after')
// let p = doSomethingAsync()
// console.log(p)
// setTimeout(() => console.log(k), 1000)

// async returns a promise

// const f1 = async () => {
//     return 'Great'
// }

// f1().then(v => console.log(v))

// console.log(f1)
// console.log(f1())

// f1().then(console.log)

// const f2 = () => Promise.resolve('Nice')

// console.log(f2)

// console.log(f2()) 

// Create a resolved promise
const f3 = new Promise((resolve, reject) => {
    console.log('aticela')
    resolve('Awesome')
})

console.log(f3)


// console.log(Promise.resolve('Jaguar'))

// Promise.resolve('Tele').then(console.log)

// const f4 = async () => 'Green'
// console.log(f4)
// console.log(f4())