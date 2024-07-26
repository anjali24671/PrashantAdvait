import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const OrderShippingAddressesSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orders",
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  }
});
const OrderShippingAddresses = mongoose.model("OrderShippingAddresses", OrderShippingAddressesSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.orderId || !data.shippingAddress || !data.state || !data.city || !data.pincode) {
      throw new Error("please fill all details");
    }
    document["orderId"] = data.orderId;
    document["shippingAddress"] = data.shippingAddress;
    document["state"] = data.state;
    document["city"] = data.city;
    document["pincode"] = data.pincode;
    await connect();
    const newOrderShippingAddresses = await OrderShippingAddresses.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "OrderShippingAddresses added succesfully" }
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
