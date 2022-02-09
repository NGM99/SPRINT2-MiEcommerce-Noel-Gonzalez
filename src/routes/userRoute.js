const express = require("express");
const router = express.Router();

const mainController = require("../controllers/userController");
const validaciones = require("../middlewares/registroMiddleWare");

router.get("/register", mainController.register);
router.get("/login", mainController.login);

router.post("/register", validaciones, mainController.registroProceso);

module.exports = router;
