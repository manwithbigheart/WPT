const http = require('http');

let server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Server started");
    res.end();
  }else if (req.url === '/mobile') {
    res.write("You'r request for mobile");
    res.end();
  } else if (req.url === '/laptop') {
    res.write("You'r request for laptop");
    res.end();
  }
  else {
    res.write("Invalid Request");
    res.end();
  }
});
server.listen(5000,() => {
  console.log("Server Created at port 5000 Successfully");
});