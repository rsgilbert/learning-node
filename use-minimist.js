// Use minimist to parse args
const minimist = require('minimist');

// From cli, run:  node .\use-minimist.js --age=21 --name Sarah
// Or: node .\use-minimist.js --age=21 --name Sarah -h Ok -v   

const args = minimist(process.argv);
console.log(args);