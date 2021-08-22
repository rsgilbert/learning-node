const f1 = () => {
    console.log('f1 start');
    process.nextTick(() => {
        console.log('f1 next tick');
    });
    console.log('f1 end');
}

const f2 = () => {
    console.log('f2 start');
    setTimeout(() => console.log('f2 timeout'), 0);
    new Promise((res, rej) => res('f2 promise')).then(v => console.log(v));
    f1();
    console.log('f2 end');
}

f2()