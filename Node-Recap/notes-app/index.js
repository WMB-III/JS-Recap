const fs = require('fs')

console.log('Welcome to class');

// fs.writeFileSync("notes.txt", 'This file was created by Node.js')
fs.appendFile("notes.txt", "\n Appended stuff", () => console.log("done"))
