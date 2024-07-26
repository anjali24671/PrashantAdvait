import { c as connect } from "../../../../chunks/connection.js";
import { U as Users } from "../../../../chunks/Users.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.userFront_id) {
      console.log("user id is needed");
      throw new Error("user id is needed");
    }
    document["userFront_id"] = data.userFront_id;
    if (data.status)
      document["status"] = data.status;
    await connect();
    const newuser = await Users.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "Users added succesfully" }
    ));
  } catch (e) {
    return new Response(JSON.stringify(
      { status: 401, message: e.message }
    ));
  }
}
async function GET({ url }) {
  const userFront_id = url.searchParams.get("userfront_id");
  try {
    await connect();
    const user = await Users.findOne({ userFront_id });
    if (!user) {
      return new Response(JSON.stringify({ status: 404, message: "User not found" }));
    }
    console.log(`User found: ${user}`);
    return new Response(JSON.stringify({ user }));
  } catch (e) {
    console.error("Error fetching user:", e);
    return new Response(JSON.stringify({ status: 500, message: e.message }));
  }
}
export {
  GET,
  POST
};
