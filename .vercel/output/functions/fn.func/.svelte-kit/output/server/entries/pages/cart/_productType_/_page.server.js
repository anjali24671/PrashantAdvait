import { C as Carts } from "../../../../chunks/Carts.js";
import { c as connect } from "../../../../chunks/connection.js";
async function load({ params }) {
  const user_id = "666fdeec15c801a5606b6033";
  const productType = params.productType;
  let productID;
  if (productType === "book")
    productID = "667067be4f780998e476650d";
  try {
    await connect();
    const cartResponse = await Carts.create({ "user_id": user_id, "product_id": productID, "type": productType });
    return {
      "good": "good"
    };
  } catch (err) {
    return new Response(JSON.stringify({ status: 401, message: e.message }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
export {
  load
};
