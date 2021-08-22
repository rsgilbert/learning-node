// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('What is your name?\t', name => {
//     console.log(`Hi ${name}`);

//     readline.question('How old are you? ', answer => {
//         const age = Number(answer);
//         if(age < 18) {
//             console.log(`Wow ${name}, you are underage`);
//         } else {
//             console.log(`Awesome, at ${age} years, you can take beer`);
//         }
//         readline.close();
//     })
// });

// inquirer

const inquirer = require('inquirer');

var questions = [
    {
        type: 'input',
        name: 'nameResponse',
        message: 'What is your name'
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(answers)
})