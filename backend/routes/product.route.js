const router = require("express").Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/products").get(isAuthenticatedUser, getProducts);

router.route("/products/:id").get(getSingleProduct);

router.route("/admin/product/:id").put(updateProduct);

router.route("/admin/product/:id").delete(deleteProduct);

router.route("/admin/product/new").post(newProduct);

module.exports = router;
