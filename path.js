const path = require('path')


const car = './car.js'
 
// console.log(path.dirname(car)) // .
// console.log(path.basename(car)) // car.js
// console.log(path.extname(car)) // .js
// console.log(path.basename(car, path.extname(car))) // car

const p = path.join('g','/', 'drink', 'tie', '..', car) // g\drink\car.js
// console.log(p)

// Absolute path
console.log(path.resolve(car))

// D:\node\learning-node\green\man\pages\a1.txt
console.log(path.resolve('green/basket', '../man/pages/a1.txt'))

// C:\green\man\pages\a1.txt
console.log(path.resolve('C:/green/basket', '../man/pages/a1.txt'))

console.log(path.normalize('/users\\gil/../asp/.///data'))
