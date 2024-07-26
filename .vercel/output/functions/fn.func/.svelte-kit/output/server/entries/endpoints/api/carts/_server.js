import { c as connect } from "../../../../chunks/connection.js";
import { C as Carts } from "../../../../chunks/Carts.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.user_id || !data.type) {
      throw new Error("please fill all details");
    }
    document["user_id"] = data.user_id;
    document["type"] = data.type;
    if (data.product_id) {
      document["product_id"] = data.product_id;
      document["quantity"] = data.quantity || 1;
    }
    await connect();
    const newCart = await Carts.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "Cart added succesfully" }
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
