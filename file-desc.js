const fs = require('fs')

// fs.open('./a', 'r', (err, fd) => {
//     console.log(fd)
// })

fs.open('./gr.js', 'a+', (err, fd) => {
    fs.write(fd, ' drink', () => null)
})

