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
        product_id: row.product_id,
        product_name: row.product_name,
        product_image: row.product_image,
        product_description: row.product_description
      };
    });
    res.json(products);
  });
});

module.exports = router;
