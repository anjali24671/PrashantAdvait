import { P as PUBLIC_KEY_ID, a as PUBLIC_KEY_SECRET } from "../../chunks/public.js";
import Razorpay from "razorpay";
async function createOrder(options) {
  let order_id = "";
  let instance = new Razorpay({ key_id: PUBLIC_KEY_ID, key_secret: PUBLIC_KEY_SECRET });
  instance.orders.create(options, function(err, order) {
    if (err) {
      console.error(err);
      return;
    } else {
      order_id = order.id;
      order.amount;
      order.currency;
    }
    return order_id;
  });
}
async function load({ locals }) {
  let options = {
    amount: 5e4,
    // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  const order_data = await createOrder(options);
  if (!locals.auth)
    return {
      "authenticated": false,
      order_data
    };
  else
    return {
      "authenticated": true,
      order_data
    };
}
export {
  load
};
