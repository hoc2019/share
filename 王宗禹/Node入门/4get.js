const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { user, password } = url.parse(req.url, true).query;
  console.log(user, password);
  res.end();
});

server.listen(3001);
