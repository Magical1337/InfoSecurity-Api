const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth");

const router = express.Router();

// Create Product
router.post("/", auth, async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Products
router.get("/", auth, async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// Get Single Product
router.get("/:pid", auth, async (req, res) => {
    const product = await Product.findByPk(req.params.pid);
    res.json(product);
});

// Update Product
router.put("/:pid", auth, async (req, res) => {
    await Product.update(req.body, { where: { pid: req.params.pid } });
    res.json({ message: "Product updated" });
});

// Delete Product
router.delete("/:pid", auth, async (req, res) => {
    await Product.destroy({ where: { pid: req.params.pid } });
    res.json({ message: "Product deleted" });
});

module.exports = router;
