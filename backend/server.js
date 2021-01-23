const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/retrieve-img", (req, res) => {
  res.json(products);
});

app.listen(5000, console.log("Server is running on Port number 5000"));
