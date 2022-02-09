const { check } = require("express-validator");

module.exports = [
  check("email").notEmpty().isEmail(),

  check("password").notEmpty(),
];
