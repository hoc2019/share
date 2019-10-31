const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const server = http.createServer((req, res) => {
  const rs = fs.createReadStream(`www${req.url}`);
//   rs.pipe(res);

    const gz = zlib.createGzip();
  //   res.setHeader("content-encoding", "gzip");
    rs.pipe(gz).pipe(res);

  rs.on("error", () => {
    res.writeHead(404);
    res.write("Not Found");
    res.end();
  });
});

server.listen(3001);
