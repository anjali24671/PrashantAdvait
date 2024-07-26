import { V as VideoCategories } from "../../../chunks/VideoCategories.js";
import { c as connect } from "../../../chunks/connection.js";
async function load() {
  try {
    await connect();
    const videoCategoriesResponse = await VideoCategories.find();
    const videoCategories = JSON.stringify(videoCategoriesResponse);
    return {
      videoCategories
    };
  } catch (err) {
    return new Response({ status: 404, message: err.message });
  }
}
export {
  load
};
