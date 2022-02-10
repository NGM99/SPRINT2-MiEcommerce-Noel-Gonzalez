const fetch = require("node-fetch");
const URL = "https://dhfakestore.herokuapp.com/api/products";

const productosFunction = async (id) => {
  const productos = await fetch(
    `https://dhfakestore.herokuapp.com/api/products/${id}/related`
  );
  const data = await productos.json();
  console.log(data);
};

productosFunction("6191cb5ec654f145d4326b85");
