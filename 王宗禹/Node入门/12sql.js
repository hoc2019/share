const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "study"
});

// db.query(
//   "SELECT name, gender FROM user_table  WHERE gender='女'",
//   (err, data) => {
//     if (err) {
//       console.log("err", err);
//     } else {
//       console.log(data);
//     }
//   }
// );
// db.query(
//   "UPDATE user_table SET english=0 WHERE ID=1",
//   (err, data) => {
//     if (err) {
//       console.log("err", err);
//     } else {
//       console.log(data);
//     }
//   }
// );
// db.query(
//   "DELETE FROM user_table WHERE ID=3",
//   (err, data) => {
//     if (err) {
//       console.log("err", err);
//     } else {
//       console.log(data);
//     }
//   }
// );
// db.query(
//   "INSERT INTO user_table (ID, name, gender, chinese, math, english) VALUES (0, 'zhang', '男', 100, 100, 100)",
//   (err, data) => {
//     if (err) {
//       console.log("err", err);
//     } else {
//       console.log(data);
//     }
//   }
// );
