const bcrypt = require("bcryptjs");
const User = require("../../src/models/UserModel");
const { validationResult } = require("express-validator");

module.exports = {
  register: (req, res) => res.render("register"),
  login: (req, res) => res.render("login"),
  registroProceso: function (req, res) {
    const resultadoValidacion = validationResult(req);

    if (resultadoValidacion.errors.length > 0) {
      return res.render("register", {
        errors: resultadoValidacion.mapped(),
        oldData: req.body,
      });
    }

    if (req.body.contraseña != req.body.Repitepassword) {
      return res.render("register", {
        errors: { Repitepassword: { msg: "Las contraseñas no coinciden" } },
      });
    }

    let usuarioCreado = {
      ...req.body,
      contraseña: bcrypt.hashSync(req.body.contraseña, 10),
    };

    let usuarioExistente = User.filtrarCampo("email", req.body.email);
    if (usuarioExistente) {
      return res.send("usuario existente");
      //return res.render("register", {

      //errors: { email: {msg: "este email ya esta registrado"}, }
      //})
    }

    User.crearUsuario(usuarioCreado);
    res.send("usuario creado");
  },
};
