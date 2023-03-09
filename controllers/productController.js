import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};
const getFilterProducts = async (req, res) => {
  try {
    const productFilter = {};
    const nameValue = req.query.name;
    const categoryValue = req.query.category;
    if (nameValue) {
      productFilter.name = nameValue;
    }
    if (categoryValue) {
      productFilter.category = categoryValue;
    }
    const products = await Product.find(productFilter);
    res.status(200).json({ products });
  } catch (error) {
    throw new Error(error);
  }
};
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

export { getAllProducts, getFilterProducts, createProduct };
