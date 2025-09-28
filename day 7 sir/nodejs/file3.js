const fs = require('fs');

// create new Directory Asynchronously
// fs.mkdir('./NewDir',(error,result)=>{});

// remove Directory Asynchronously
// fs.rmdir('./NewDir',(error,result)=>{});

fs.mkdir('./NewDir',(error,result)=>{
    fs.writeFile("./NewDir/newFile.txt","Hello friends",(error,result)=>{});
});

// Task: write logic  to delete derectory having file in it asynchronously.
