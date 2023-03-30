import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import productRouter from "./routes/productRouter.js";
import authRouter from "./routes/authRouter.js";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use("/product", productRouter);
app.use("/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 5000;

const starter = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log("server is connect"));
  } catch (error) {
    throw new Error(error);
  }
};

starter();
