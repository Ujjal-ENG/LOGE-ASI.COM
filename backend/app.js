const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import all routes

const products = require("./routes/product.route");

app.use("/api/v1", products);

module.exports = app;
