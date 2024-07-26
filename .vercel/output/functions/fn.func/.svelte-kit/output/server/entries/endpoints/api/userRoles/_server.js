import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const UserRolesSchema = new mongoose.Schema({
  role_name: {
    type: String,
    required: true,
    trim: true,
    default: "user",
    enum: ["admin", "user"]
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: null
  }
});
const UserRoles = mongoose.model("UserRoles", UserRolesSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.role_name || !data.created_at) {
      console.log("add all details");
      throw new Error("please fill all details");
    }
    document["role_name"] = data.role_name;
    document["created_at"] = data.created_at;
    if (data.updated_at)
      document["updated_at"] = data.updated_at;
    await connect();
    const newUserRole = await UserRoles.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "UserRoles added succesfully" }
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
