const express = require("express");
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

    if (req.body.password != req.body.Repitepassword) {
      return res.render("register", {
        errors: { Repitepassword: { msg: "Las contraseñas no coinciden" } },
      });
    }

    let usuarioCreado = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
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

  loginProceso: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // res.send({ userNameLogin, body: req.body });
      let userNameLogin = User.verificarEmail(req.body.email);
      if (userNameLogin) {
        let passCorrecta = bcrypt.compareSync(
          req.body.password,

          userNameLogin.password
        );
        if (passCorrecta) {
          delete userNameLogin.password;
          res.redirect("/");
        }
      }
    } else {
      return res.render("login", {
        errors: {
          email: {
            msg: "Ingrese el Nombre de usuario",
          },
          password: {
            msg: "Ingrese la contraseña",
          },
        },
      });
    }
  },
};
