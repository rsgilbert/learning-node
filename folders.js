const fs = require('fs')

// fs.access('./green', err => {
//     if(err) {
//         console.error(err)
//     }
// })

// Check if you can access node_modules
// fs.access('./node_modules', err => {
//     if(err){
//         console.error(err)
//     }
// })

// create new folder

const folderPath = './grey'

// Check if file exists
// if(fs.existsSync(folderPath)) {
//     console.log(folderPath, 'exists')
// } else {
//     console.log('Does not exist, creating it...')
//     fs.mkdir(folderPath, (err, path) => {
//         if(err) {
//             console.error(err)
//             return
//         }
//         console.log('Path is', path)
//         console.log(fs.existsSync(folderPath))
//     })
// }

// Make directory
// fs.mkdir(folderPath, (err, path) => {
//     console.log('log err', err)
//     console.log(path)
//     return
// })
