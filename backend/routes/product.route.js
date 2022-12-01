const router = require("express").Router();

const {
  getProducts,
  newProduct,
} = require("../controllers/product.controller.js");

router.route("/products").get(getProducts);

router.route("/product/new").post(newProduct);

module.exports = router;
