const Product = require ("../models/Product");

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json   ({
        status: "ok",
        data: products,
    });
}

const addProduct = async (req, res) => {
    let newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.unit = req.body.unit;
    newProduct.inventory = req.body.inventory;
    newProduct = await newProduct.save();
    res.status(200).json   ({
        status: "ok",
        dataInserted: newProduct,
    });
}

const getProductID = async (req, res) => {
    const productID = await Product.findById(req.params.id);
    res.status(200).json({
        status: "ok",
        action: "GET A  products",
        ID: productID,
    });
}

const putProductID = (req, res) => {
    res.status(200).json({
        status: "ok",
        action: "MODIFY A  products",
        ID: req.params.id
    });
}

const deleteProductID = async (req, res) => {
    
    let deleteID = await Product.deleteOne(req.params.id);
    // deleteID = await Product.find();
    res.status(200).json({
        status: "ok",
        action: "DELETE A  products",
        ID: deleteID
    });
}

module.exports = {
    getAllProducts,
    addProduct,
    getProductID,
    putProductID,
    deleteProductID,
}
