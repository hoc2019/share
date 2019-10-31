const fs = require("fs");
const url = require("url");
const http = require("http");

http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    fs.stat(`www/${pathname}`, (err, stat) => {
      if (err) {
        notFound();
      } else {
        const ifModifiedSince = req.headers["if-modified-since"];
        if (ifModifiedSince) {
          const client_time = Math.floor(
            new Date(ifModifiedSince).getTime() / 1000
          );
          const server_time = Math.floor(stat.mtime.getTime() / 1000);
          console.log(client_time, server_time, server_time > client_time);
          if (server_time > client_time) {
            console.log(111);
            sendFile(stat);
          } else {
            res.writeHead(304);
            res.write("Not Modified");
            res.end();
          }
        } else {
          sendFile(stat);
        }
      }
    });
    function sendFile(stat) {
      const rs = fs.createReadStream(`www/${pathname}`);
      res.setHeader("Last-Modified", stat.mtime.toUTCString());
      rs.pipe(res);
      rs.on("error", () => {
        notFound(res);
      });
    }
    function notFound() {
      res.writeHeader(404);
      res.write("Not Found");
      res.end();
    }
  })
  .listen(3001);
