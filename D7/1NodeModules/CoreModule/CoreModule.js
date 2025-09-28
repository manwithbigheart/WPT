const path = require('path');  
// path is a module pre-defiend in CoreModules 
console.log(__dirname);
console.log(__filename);

// to run the above program we use type command : node CoreModule.js
// it will print the current directory and file name with path
// we can use path module to get the file name and directory name from __filename

console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
// it will print the current directory Name and file name with extension and extension only



const os = require('os'); 
 
console.log(os.arch());
console.log(os.type());
console.log(os.hostname());
