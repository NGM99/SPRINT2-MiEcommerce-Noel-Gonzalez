// Módulos
const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

// Configuración de public //
app.use(express.static("public"));
app.use(express.static("assets"));

//Rutas
app.set("view engine", "ejs");
app.set("views", "./views/pages");

// INDEX
app.get("/", (req, res) => {
  res.render("index");
});

// PRODUCTS
app.get("/products", (req, res) => {
  res.render("product");
});
// PRODUCT/:ID
app.get("/products/:productID", (req, res) => {
  let productID = req.params.productID;

  res.render("product_error.ejs", { productID });
});

// CART
app.get("/cart", (req, res) => {
  res.render("cart");
});

// CHECKOUT
app.get("/checkout", (req, res) => {
  res.render("checkout");
});

// REGISTER
app.get("/register", (req, res) => {
  res.render("register");
});

// LOGIN
app.get("/login", (req, res) => {
  res.render("login");
});
//Servidor
app.listen(PORT, () => {
  console.log("SERVIDOR CORRIENDO EN EL PUERTO 3000");
});
