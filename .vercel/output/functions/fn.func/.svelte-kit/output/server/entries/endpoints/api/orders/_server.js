import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const OrdersSchema = new mongoose.Schema({
  order_number: {
    type: String,
    required: true,
    unique: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  scholarshipAmount: {
    type: Number,
    required: true,
    min: 0
  },
  netAmount: {
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true,
    default: "placed",
    enum: ["placed", "processing", "shipping", "delivered"]
  },
  paymentStatus: {
    type: String,
    required: true,
    default: "unpaid",
    enum: ["paid", "unpaid"]
  },
  paymentType: {
    type: String,
    required: true,
    enum: ["cash", "card", "UPI"]
  },
  paymentTransactionId: {
    type: String,
    unique: true,
    required: true
  }
});
const Orders = mongoose.models.Orders || mongoose.model("Orders", OrdersSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.order_number || !data.user_id || !data.amount || !data.scholarshipAmount || !data.netAmount || !data.quantity || !data.status || !data.paymentStatus || !data.paymentType || !data.paymentTransactionId) {
      throw new Error("please fill all details");
    }
    document["order_number"] = data.order_number;
    document["user_id"] = data.user_id;
    document["amount"] = data.amount;
    document["scholarshipAmount"] = data.scholarshipAmount;
    document["netAmount"] = data.netAmount;
    document["quantity"] = data.quantity;
    if (data.status)
      document["status"] = data.status;
    if (data.paymentStatus)
      document["paymentStatus"] = data.paymentStatus;
    document["paymentType"] = data.paymentType;
    document["paymentTransactionId"] = data.paymentTransactionId;
    await connect();
    const newOrders = await Orders.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "Orders added succesfully" }
    ));
  } catch (e) {
    return new Response(JSON.stringify(
      { status: 401, message: e.message }
    ));
  }
}
export {
  POST
};
