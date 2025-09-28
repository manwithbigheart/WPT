const http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead("server is running");
  res.end();
})

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});