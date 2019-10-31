const cluster = require("cluster");
const os = require("os");
const process = require("process");
const http = require("http");

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  console.log("master process");
} else {
  console.log("subprocess", process.pid);
  http
    .createServer((req, res) => {
      console.log(process.pid);
      res.write("aaaa");
      res.end();
    })
    .listen(8080);
}
