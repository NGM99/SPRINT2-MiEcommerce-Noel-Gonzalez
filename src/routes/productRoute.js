const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/api/products", productController.findProducts);
router.get("/api/products/:id", productController.findProductById);
router.get(
  "/api/products/:id/related",
  productController.findProductsRelatedById
);
router.get("/api/product/suggested", productController.findProductsSuggested);
router.get(
  "/api/products/mostWanted",
  productController.findProductsMostWanted
);
router.get("/products", productController.getAllProducts);

module.exports = router;
