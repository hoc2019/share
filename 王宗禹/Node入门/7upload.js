const http = require("http");
const url = require("url");
const fs = require("fs");
const uuid = require("uuid/v4");

require("./utils/common");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  switch (pathname) {
    case "/upload":
      upload(req, res);
      break;
    default:
      static(req, res);
      break;
  }
});

function upload(req, res) {
  const blob = [];
  req.on("data", data => {
    blob.push(data);
  });
  req.on("end", () => {
    const contentType = req.headers["content-type"] || "";
    const boundary = contentType.split("boundary=") || [];
    if (boundary) {
      const splitSign = `--${boundary[1]}`;
      const data = Buffer.concat(blob);
      handleData(data, splitSign);
    }
    res.end();
  });
}

function handleData(data, splitSign) {
  const post = {};
  const file = {};
  const arr = data
    .split(splitSign)
    .slice(1, -1) //去除首个空项，和末尾结束符 --\r\n
    .map(item => item.slice(2, -2)); // 去除每项首尾\r\n
  arr.forEach(item => {
    const n = item.indexOf("\r\n\r\n");
    let description = item.slice(0, n).toString();
    let content = item.slice(n + 4); // \r\n
    console.log(description.toString(), content.toString());
    if (description.indexOf("\r\n") === -1) {
      //普通数据
      const name = description
        .split("; ")[1]
        .split("=")[1]
        .slice(1, -1);
      content = content.toString();
      post[name] = content;
    } else {
      const [line1, line2] = description.split("\r\n");
      let [, name, filename] = line1.split("; ");
      const type = line2.split(": ")[1];
      name = name.split("=")[1];
      filename = filename.split("=")[1];
      const path = `upload/${uuid()}`;
      fs.writeFile(path, content, err => {
        if (err) {
          console.log(`文件写入失败`, err);
        } else {
          file[name] = { filename, path, type };
        }
      });
    }
  });
}
function static(req, res) {
  fs.readFile(`www${req.url}`, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
}

server.listen(3001);
