const mysql = require("mysql");
const http = require("http");
const fs = require("fs");
const url = require("url");
const zlib = require("zlib");
const crypto = require("crypto");

const md5 = str => {
  const box = crypto.createHash("md5");
  box.update(str);
  return box.digest("hex");
};

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "study"
});

const errorSend = (res, msg) => {
  res.write(JSON.stringify({ err: 0, msg }));
  res.end();
};
const successSend = (res, msg) => {
  res.write(JSON.stringify({ err: 1, msg }));
  res.end();
};

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  const { username, password } = query;
  switch (pathname) {
    case "/reg":
      db.query(
        `SELECT ID FROM user_table WHERE username='${username}'`,
        (err, data) => {
          if (err) {
            console.log(err);
            errorSend(res, "database error");
          } else if (data.length > 0) {
            errorSend(res, "this username exists");
          } else {
            db.query(
              `INSERT INTO user_table (ID, username, password) VALUES (0,'${username}','${md5(
                password
              )}')`,
              err => {
                if (err) {
                  console.log(err);
                  errorSend(res, "database error");
                } else {
                  successSend(res, "reg success");
                }
              }
            );
          }
        }
      );
      break;
    case "/login":
      db.query(
        `SELECT * FROM user_table WHERE username='${username}'`,
        (err, data) => {
          if (err) {
            errorSend(res, "database error");
          } else if (data.length > 0) {
            if (data[0].password === md5(password)) {
              successSend(res, "reg success");
            } else {
              errorSend(res, "password is not match");
            }
          } else {
            errorSend(res, "no this usrer");
          }
        }
      );
      break;
    default:
      const rs = fs.createReadStream(`www${pathname}`);
      const gz = zlib.createGzip();
      res.setHeader("content-encoding", "gzip");
      rs.pipe(gz).pipe(res);
      rs.on("error", () => {
        res.writeHead(404);
        res.write("Not Found");
      });
      break;
  }
});

server.listen(8080);
