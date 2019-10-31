const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile(`www${req.url}`, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3001);
