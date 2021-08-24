const fs = require('fs')

fs.stat('../', (err, stat) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(stat.isFile())
    console.log(stat.isDirectory())
    console.log(stat.size)
    console.log(stat)
})