const fs = require('fs');

// write file asynchronously
fs.writeFile("./writeAsyn.txt","Hello friends",(error,result)=>{
    console.log("file write successfully");
});
// read file asynchronously
fs.readFile("./writeAsyn.txt","utf8",(error,result)=>{
    console.log("file read successfully:"+result);
});
// append data asynchronously
fs.appendFile("./writeAsyn.txt"," ,You All are my best friends",
    (error,result)=>{
    console.log("data appended:"+result);
});

// write file first and then read and then append data in it asynchronously
fs.readFile("./writeAsyn.txt","utf8",(error,result)=>{
     fs.writeFile('./writeAsyn2.txt',result,(error,result)=>{
        fs.appendFile('./writeAsyn2.txt','  Be Happy',(err,result)=>{});
     });
})
// remove file asynchronously
fs.unlink("./writeAsyn.txt",()=>{});