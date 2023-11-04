const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log("received request for " + req.url);

  // lets respond with a 200 OK and a message
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
  <style>
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
  </style>
  <div>
  <h1>It is working!<h1>
  <img src="https://media1.giphy.com/media/dIxkmtCuuBQuM9Ux1E/giphy.gif?cid=ecf05e47pjquiyf98wdvlls5ayouywvt5hgxkg6shlaerblo&ep=v1_gifs_search&rid=giphy.gif&ct=g">
  </div>`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
