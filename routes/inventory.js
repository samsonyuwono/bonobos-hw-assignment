const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const connection = require("../db/connection");

router.get("/inventory", (req, res) => {
  const inventoryQuery = "SELECT * FROM inventory";
  connection.query(inventoryQuery, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for inventory: " + err);
      res.sendStatus(500);
      res.end();
    }
    const inventory = rows.map(row => {
      return {
        product_id: row.product_id,
        waist: row.waist,
        length: row.length,
        style: row.style,
        count: row.count
      };
    });
    res.json(inventory);
  });
});

module.exports = router;
