import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "please provide id"],
  },
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  category: {
    type: String,
    enum: ["obuv", "mikina", "tričko"],
    required: [true, "please provide category"],
  },
  color: {
    type: String,
    required: [true, "please provide color"],
  },
  price: {
    type: Number,
    required: [true, "please provide price"],
  },
  imageURL: {
    type: String,
    required: [true, "please provide image adress"],
  },
});

export default mongoose.model("Product", ProductSchema);
