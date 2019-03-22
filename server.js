// app.js
const express = require("express");
const mysql = require("mysql");
const app = express();
const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  console.log("hit");
  res.send("root success");
});

app.get("/products/:id", (req, res) => {
  console.log("fetching products:" + req.params.id);

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bonobos"
  });

  connection.query("SELECT * FROM products", (err, rows, fields) => {
    console.log("fetching products");
    res.json(rows);
  });
  // res.end();
});

app.get("/inventory", (req, res) => {
  console.log("fetching products:" + req.params.id);

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bonobos"
  });

  connection.query("SELECT * FROM inventory", (err, rows, fields) => {
    console.log("fetching inventory");
    res.json(rows);
  });
  // res.end();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
