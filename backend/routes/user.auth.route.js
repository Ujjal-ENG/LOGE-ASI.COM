const router = require("express").Router();

const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/user.auth.controller");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

module.exports = router;
