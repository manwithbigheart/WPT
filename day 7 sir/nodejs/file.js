const fs = require('fs');

// write file Synchronously 
fs.writeFileSync("./writefile1.txt","my first msg");
// red file Synchronously
let fileread = fs.readFileSync('./writefile1.txt',"utf8");
console.log(fileread);
// apprend data Synchronously
fs.appendFileSync("./writefile1.txt"," this is my second msg");
// remove file Synchronously
fs.unlinkSync('./writefile1.txt');