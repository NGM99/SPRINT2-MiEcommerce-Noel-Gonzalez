const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validaciones = require("../middlewares/registroMiddleWare");
const validarLoginMiddleware = require("../middlewares/validarLoginMiddleware");

router.get("/register", userController.register);
router.get("/login", userController.login);

router.post("/register", validaciones, userController.registroProceso);
router.post("/login", validarLoginMiddleware, userController.loginProceso);

module.exports = router;
