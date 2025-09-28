const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url=="/"){
    //    res.write("server get Started");
    //    res.end();
    res.writeHead(200,{"content-type":"text/html"});
    let readStream = fs.createReadStream(__dirname+"/index.html","utf8");
      readStream.pipe(res);
      
    }else if(req.url=="/mobile"){
         res.write("your request is for mobile");
         res.end();
    }else if(req.url=="/laptop"){
         res.write("your request is for Laptop");
       res.end();
    }
});

server.listen(9999,()=>{
    console.log("server created successfully");
});