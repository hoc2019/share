const fs = require("fs");

// fs.readFile("1.txt", (err, data) => {
//   if (err) {
//     console.log(`error:${err}`);
//   } else {
//     console.log(data);
//   }
// });

fs.writeFile("2.txt", "123", err => {
  if (err) {
    console.log(`error:${err}`);
  }
});
