const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/api/cart/:user", cartController.findCartByUser);
router.post("/api/cart/:user", cartController.addElementToCartByUser);
router.post(
  "/api/cart/delete/:user",
  cartController.substractElementFromCartByUser
);

module.exports = router;
