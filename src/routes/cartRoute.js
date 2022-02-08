const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/api/cart/:u", cartController.findCartByUser);

module.exports = router;
