const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");

const users = {
  //   user: "wang",
  //   password: 123
};

const server = http.createServer((req, res) => {
  createMsg(res);
  const { pathname, query } = url.parse(req.url, true);
  switch (pathname) {
    case "/reg":
      userReg(query, res);
      break;
    case "/login":
      userLogin(query, res);
      break;
    default:
      static(req, res);
      break;
  }
  //   let str = "";
  //   req.on("data", data => {
  //     str += data;
  //   });
  //   req.on("end", () => {
  //     const post = qs.parse(str);
  //     res.end();
  //   });
});

function createMsg(res) {
  res.sMsg = function(msg) {
    res.write(JSON.stringify({ err: 0, msg }));
  };
  res.fMsg = function(msg) {
    res.write(JSON.stringify({ err: 1, msg }));
  };
}

function userReg(query, res) {
  const { username, password } = query;
  if (!username) {
    res.fMsg("username is required");
  } else if (!password) {
    res.fMsg("password is required");
  } else if (!/^\w{6,22}$/.test(username)) {
    res.fMsg("invalid username");
  } else if (/['|"]/.test(password)) {
    res.fMsg("invalid password");
  } else if (users[username]) {
    res.fMsg("user already exists");
  } else {
    users[username] = password;
    res.sMsg("success");
  }
  res.end();
}

function userLogin(query, res) {
  const { username, password } = query;
  if (!username) {
    res.fMsg("username is required");
  } else if (!password) {
    res.fMsg("password is required");
  } else if (!/^\w{6,22}$/.test(username)) {
    res.fMsg("invalid username");
  } else if (/['|"]/.test(password)) {
    res.fMsg("invalid password");
  } else if (!users[username]) {
    res.fMsg("no this user");
  } else if (users[username] !== password) {
    res.fMsg("username or password is incorrect");
  } else {
    res.sMsg("login success");
  }
  res.end();
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
