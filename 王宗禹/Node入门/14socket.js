const http = require("http");
const io = require("socket.io");

const httpServer = http.createServer();
httpServer.listen(8080);

const wsServer = io.listen(httpServer);

wsServer.on("connection", sock => {
  sock.on("chat", msg => {
    sock.emit("echo", `${msg}!`);
  });
});
