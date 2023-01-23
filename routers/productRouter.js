const express = require("express");
const productRouter = express.Router();
const {getAllProducts, addProduct, getProductID, putProductID, deleteProductID }=require("../controllers/Product");

productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);

productRouter
    .route("/:id")
    .get(getProductID)
    .put(putProductID)
    .delete(deleteProductID);

module.exports = productRouter;
