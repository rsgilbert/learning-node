let timer2Id
const f1 = () => {
    console.log('f1 start')
    console.time('f1_time')
    setTimeout(() => console.log('timeout one'), 10)
    setImmediate(() => console.log('immediate'))
    timer2Id = setTimeout(() => console.log('timeout 2'), 10)
    console.log('f1 end')
}

f1()

const f2 = (a, b, c) => {
    console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
    clearTimeout(timer2Id);
}
setTimeout(f2, 8, 10, 20, 30)
console.timeEnd('f1_time')


// clearTimeout(timer2Id);