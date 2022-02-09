const ProductModel = require("../models/ProductModel");

module.exports = {
  findProducts: (req, res) => {},
  findProductById: async (req, res) => {
    let idProduct = req.params.id;
    const productToShow = await ProductModel.filterProductById(idProduct);
    res.render("product", { productToShow });
  },
  findProductsRelatedById: (req, res) => {},
  findProductsSuggested: (req, res) => {},
  findProductsMostWanted: (req, res) => {},
};
