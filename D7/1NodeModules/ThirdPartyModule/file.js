const fs = require('fs');
// write file synchronously
fs.writeFileSync('FileExample.txt', 'Hello, World! My First message.');
console.log('File written successfully.');


// read file synchronously
const data = fs.readFileSync('FileExample.txt', 'utf8');
console.log('File content:', data);

// append to file synchronously
fs.appendFileSync('FileExample.txt', '\n helloo');
console.log('File appended successfully.');




// append to file synchronously
fs.appendFileSync('FileExample.txt', '\n its A NEW LINE');
console.log('File appended successfully.');