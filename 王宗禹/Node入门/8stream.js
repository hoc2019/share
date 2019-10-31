const fs = require("fs");

const rs = fs.createReadStream("www/logo.png");
const ws = fs.createWriteStream("www/logo2.png");

rs.pipe(ws);
