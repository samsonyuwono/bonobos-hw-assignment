const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "b9e3a7f65edfe6",
  password: "65c8fc7b",
  database: "heroku_4bc31d4c9bb588e"
});

function getConnection() {
  return pool;
}

module.exports = pool;
