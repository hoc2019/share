const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  let str = "";
  req.on("data", data => {
    str += data;
  });
  req.on("end", () => {
    const postData = qs.parse(str);
    console.log(postData);
    res.end();
  });
});
server.listen(3001);
