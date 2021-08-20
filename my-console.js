// See: https://nodejs.dev/learn/output-to-the-command-line-using-nodejs

// const x = 'hello x';
// const y = 'I am okay y';

// console.log(x, y, 80);

// console.log(13);

// console.log('This is %s. number %d and integer %i object %o', 'awesome', 1.21, 0.88, { a: 'Green'});
// console.log('tenis', {game: 'Tenis'});
// console.clear();

// console.count('Madden');
// console.count('Madden');
// console.count('Hosana');
// console.count();
// console.count();

// [,4,1,5].forEach(() => console.count());
// console.countReset();
// console.count();
// console.count('Madden');
// console.countReset('Madden');
// console.count('Madden');

// const f1 = () => {
//     console.trace()
// }

// const f2 = () => {
//     f1();
// }

// const f3 = () => {
//     f2();
// }

// f3();


const g1 = () => {
    console.log('I am running quickly');
}

const g2 = () => {
    console.log('I am taking my time');
    Array(10000000).forEach((x) => { let a = x});
}

// console.time('g1_time');
// g1();
// console.timeEnd('g1_time');

// console.time('g2_time');
// g2();
// console.timeEnd('g2_time');

// console.error('You did sth bad');


// coloring 

// console.log('\x1b[33m%s\x1b[0m', 'trust');

// const chalk = require('chalk');

// console.log(chalk.bgBlue('OMEGA'));
// console.log(chalk.green('alpha'));


// progress

const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 50 });


const timer = setInterval(() => {
    bar.tick();
    if(bar.complete) {
        clearInterval(timer);
    }
}, 100);









