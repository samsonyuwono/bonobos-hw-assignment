// app.js
const express = require("express");
const mysql = require("mysql");
const app = express();
const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;

app.use(morgan("combined"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bonobos"
});

app.get("/", (req, res) => {
  res.send("root success");
});

// app.get("/products", (req, res) => {
//   console.log(req.params.id);
//   const productId = req.params.id;
//   const productQueryString = "SELECT * FROM products";
//   connection.query(productQueryString, (err, rows, fields) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//       res.end();
//     }
//
//     const products = rows.map(row => {
//       return {
//         "Product Id": row.product_id,
//         "Product Name": row.product_name,
//         "Product Image": row.product_image,
//         "Product Description": row.product_description
//       };
//     });
//     res.json(products);
//   });
// });
//
// app.get("/inventory", (req, res) => {
//   console.log("fetching products:" + req.params.id);
//   const inventoryQuery = "SELECT * FROM inventory";
//   connection.query(inventoryQuery, (err, rows, fields) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//       res.end();
//     }
//     const inventory = rows.map(row => {
//       return {
//         "Product ID": row.product_id,
//         Waist: row.waist,
//         Length: row.length,
//         Style: row.style,
//         Count: row.count
//       };
//     });
//     res.json(inventory);
//   });
// });

app.get("/products/inventory", (req, res) => {
  console.log(req.params.id);
  const joinQueryString =
    "SELECT * FROM products JOIN inventory on products.product_id = inventory.product_id";
  connection.query(joinQueryString, [req.params.id], (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      res.end();
    }

    const productInventories = rows.map(row => {
      return {
        "Product ID": row.product_id,
        "Product Category": row.product_name,
        "Product Image": row.product_image,
        "Product Description": row.product_description,
        Waist: row.waist,
        Length: row.length,
        Style: row.style,
        Count: row.count
      };
    });
    res.json(productInventories);
  });
});

app.get("/products/inventory/:id", (req, res) => {
  const joinQueryString =
    "SELECT * FROM products JOIN inventory on products.product_id = inventory.product_id WHERE products.product_id = ?";
  connection.query(joinQueryString, [req.params.id], (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      res.end();
    }

    const productInventory = rows.map(row => {
      return {
        "Product ID": row.product_id,
        "Product Category": row.product_name,
        "Product Image": row.product_image,
        "Product Description": row.product_description,
        Waist: row.waist,
        Length: row.length,
        Style: row.style,
        Count: row.count
      };
    });
    res.json(productInventory);
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
