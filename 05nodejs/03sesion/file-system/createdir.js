const fs = require('fs')

// fs.mkdir('./newdir2', (err) => {
//     if (err) {
//       throw err
//     }
// })

fs.rmdir('./newdir2',  (err) => {
  if (err) {
    throw err
  }
})
