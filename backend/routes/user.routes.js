const express = require("express");

const router = express.Router();

const {
  allUser,
  newUser,
  loginUser,
} = require("../controllers/user.controller");

router.get("/list", allUser);
router.post("/register", newUser);
router.post("/login", loginUser);

module.exports = router;
