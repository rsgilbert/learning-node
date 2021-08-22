const fs = require('fs')


fs.readFile("./card.js", (err, data) => {
    if(err) {
        console.error('Error is', err);
    }
    else {
        console.log('Data is', data.toString());
    }
});