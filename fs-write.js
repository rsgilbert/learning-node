const fs = require('fs')

const content = 'Jeans for everyone'

fs.writeFile('./notes.txt', content, (err) => {
    if(err) {
        console.error(err)
    }
})

const writeOptions = { 
    // flag r+ opens the file for reading and writing
    // Won't write if the file doesn't exist
    // See: https://nodejs.org/api/fs.html#fs_file_system_flags
    flag: 'r+' 
}

// fs.writeFile('./notes.txt', content, writeOptions, err => {
//     if(err) {
//         console.log('ERROR: ' + err)
//     }
// })

const appendOptions = {
    // Opens file for appending, fails if the path doesn't exist
    flag: 'a'
}
fs.appendFile('./notes.txt', 'Queen', appendOptions, err => {
    if(err) {
        console.error(err)
    }
})