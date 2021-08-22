// Simple event loop example

const bar = () => {
    setTimeout(baz, 0)
    console.log('bar')
}

const baz = () => {
    console.log('baz')
}

const baz2 = () => {
    console.log('baz2')
}

const foo = () => {
    console.log('foo')
    bar();
    baz2()
}

foo()

// Output of foo():
// foo
// bar 
// baz2
// baz