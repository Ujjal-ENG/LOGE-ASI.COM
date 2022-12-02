const express = require("express");
const app = express();

//middle ware to handle errors
const errorMiddleWare = require("./middlewares/errors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import all routes

const products = require("./routes/product.route");

const userAuth = require("./routes/user.auth.route");

app.use("/api/v1", products);
app.use("/api/v1", userAuth);

app.use(errorMiddleWare);

module.exports = app;
