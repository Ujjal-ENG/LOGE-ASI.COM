const router = require("express").Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.route("/products").get(getProducts);

router.route("/products/:id").get(getSingleProduct);

router.route("/admin/product/:id").put(updateProduct);

router.route("/admin/product/:id").delete(deleteProduct);

router.route("/admin/product/new").post(newProduct);

module.exports = router;
