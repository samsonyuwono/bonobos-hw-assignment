const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const connection = require("../db/connection");

router.get("/products/inventory", (req, res) => {
  const joinQueryString =
    "SELECT * FROM products JOIN inventory on products.product_id = inventory.product_id";
  connection.query(joinQueryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for product inventory: " + err);
      res.sendStatus(500);
      res.end();
    }

    const productInventories = rows.map(row => {
      return {
        product_id: row.product_id,
        product_name: row.product_name,
        product_image: row.product_image,
        product_description: row.product_description,
        waist: row.waist,
        length: row.length,
        style: row.style,
        count: row.count
      };
    });
    res.json(productInventories);
  });
});

module.exports = router;
