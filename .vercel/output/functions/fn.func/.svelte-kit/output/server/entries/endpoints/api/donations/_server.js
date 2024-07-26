import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const DonationsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users"
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});
const Donations = mongoose.models.Donations || mongoose.model("Donations", DonationsSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.user_id || !data.amount) {
      throw new Error("please fill all details");
    }
    document["user_id"] = data.user_id;
    document["amount"] = data.amount;
    await connect();
    const newDonation = await Donations.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "Donations added succesfully" }
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
