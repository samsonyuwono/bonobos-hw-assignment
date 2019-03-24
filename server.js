const express = require("express");
const mysql = require("mysql");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.use(morgan("short"));

const inventoryRoute = require("./routes/inventory");
const productRoute = require("./routes/products");
const productInventoryRoute = require("./routes/productInventory.js");

app.use(inventoryRoute);
app.use(productRoute);
app.use(productInventoryRoute);

app.get("/", (req, res) => {
  res.send("Success");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running at " + PORT);
});

module.exports = app;
