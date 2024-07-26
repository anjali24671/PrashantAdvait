import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const userEnrolledSessionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users"
  },
  session_name: {
    type: String,
    required: true,
    trim: true
  },
  validity: {
    type: Date,
    default: null
  }
});
const userEnrolledSession = mongoose.model("userEnrolledSession", userEnrolledSessionSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.user_id || !data.session_name || data.validity) {
      throw new Error("please fill all details");
    }
    document["user_id"] = data.user_id;
    document["session_name"] = data.session_name;
    document["validity"] = data.validity;
    await connect();
    const newuserEnrolledSession = await userEnrolledSession.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "userEnrolledSession added succesfully" }
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
