import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getFilterProducts,
  createProduct,
} from "../controllers/productController.js";

router.route("/").get(getAllProducts).post(createProduct);
router.route("/filter").get(getFilterProducts);

export default router;
