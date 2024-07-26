import mongoose from "mongoose";
const cartsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    default: null
    // Set default to null
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});
const Carts = mongoose.model("Carts", cartsSchema);
export {
  Carts as C
};
