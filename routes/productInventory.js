const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const connection = require("../db/connection");

router.get("/products/inventory", (req, res) => {
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

router.get("/products/inventory/:id", (req, res) => {
  const productInventoryId = req.params.id;
  const queryString =
    "SELECT * FROM products JOIN inventory on products.product_id = inventory.product_id WHERE products.product_id = ?";
  connection.query(queryString, [productInventoryId], (err, rows, fields) => {
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

module.exports = router;
