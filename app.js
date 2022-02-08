// Módulos
const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

// Configuración de public, src para todo el proyecto
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(express.static("src"));
app.use(express.urlencoded({ extended: false }));

//Rutas
app.set("view engine", "ejs");
app.set("views", "./views/pages");
const mainRoute = require("./src/routes/mainRoute");
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");
const storeRoute = require("./src/routes/storeRoute");
const cartRoute = require("./src/routes/cartRoute");

// INDEX
app.use("/", mainRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/stores", storeRoute);
app.use("/cart", cartRoute);

// // PRODUCTS
// app.get("/products", (req, res) => {
//   res.render("product");
// });
// // PRODUCT/:ID
// app.get("/products/:productID", (req, res) => {
//   let productID = req.params.productID;

//   res.render("product_error.ejs", { productID });
// });

// // CART
// app.get("/cart", (req, res) => {
//   res.render("cart");
// });

// CHECKOUT
app.get("/checkout", (req, res) => {
  res.render("checkout");
});

//Servidor
app.listen(PORT, () => {
  console.log("SERVIDOR CORRIENDO EN EL PUERTO 3000");
});
