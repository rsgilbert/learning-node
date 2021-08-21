// ES6 Job Queues and promise

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const baz2 = () => {
    new Promise((resolve, reject) => {
        console.log('I\'ll resolve baz2')
        resolve('baz2')
        console.log('Done baz2 within resolve')
    })
    .then(resolveValue => console.log(resolveValue))
    console.log('Within baz2')
}

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0) // last one (uses message queue)
    // new Promise((resolve, reject) => {
    //     resolve('Should be right afer baz but before bar')
    // })
    // .then(resolve => console.log(resolve))
    baz2()
    baz()
}

foo()
console.log('done here')