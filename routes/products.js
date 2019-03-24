const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const connection = require("../db/connection");

router.get("/products", (req, res) => {
  const productId = req.params.id;
  const productQueryString = "SELECT * FROM products";
  connection.query(productQueryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for products: " + err);
      res.sendStatus(500);
      res.end();
    }
    const products = rows.map(row => {
      return {
        "Product Id": row.product_id,
        "Product Name": row.product_name,
        "Product Image": row.product_image,
        "Product Description": row.product_description
      };
    });
    res.json(products);
  });
});

module.exports = router;
