const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log("received request for " + req.url);

  // lets respond with a 200 OK and a message
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello World!`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
