import express from "express";
const router = express.Router();
import rateLimit from "express-rate-limit";
import { loginUser, registerUser } from "../controllers/authController.js";

const logLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
});

router.route("/login").post(logLimit, loginUser);
router.route("/register").post(logLimit, registerUser);

export default router;
