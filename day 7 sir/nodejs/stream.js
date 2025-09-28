const fs = require('fs');


let readStream = fs.createReadStream(__dirname+"/writeAsyn2.txt",()=>{});
let writeSream = fs.createWriteStream(__dirname+"/writeDatafile.txt",()=>{});
readStream.on("data",(chunk)=>{
    writeSream.write(chunk);
});