import { c as connect } from "../../../chunks/connection.js";
import { C as Carts } from "../../../chunks/Carts.js";
async function load() {
  try {
    await connect();
    const cartsResponse = await Carts.find();
    const carts = await JSON.stringify(cartsResponse);
    return {
      carts
    };
  } catch (err) {
    console.log(err);
  }
}
export {
  load
};
