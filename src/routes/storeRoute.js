const express = require("express");
const router = express.Router();

const storeController = require("../controllers/storeController");

router.get("/api/stores", storeController.findListStores);
router.get("/api/stores/:id", storeController.findListStoresById);

module.exports = router;
