import { V as VideoCategories } from "../../../chunks/VideoCategories.js";
import { V as VideoSeries } from "../../../chunks/VideoSeries.js";
import { c as connect } from "../../../chunks/connection.js";
async function load() {
  try {
    await connect();
    const videoCategoriesResponse = await VideoCategories.find();
    let VideoCategoriesData = new Object();
    for (let videoCategory of videoCategoriesResponse) {
      const subCategory = await VideoSeries.find({ category_id: videoCategory._id }, { title: 1, language: 1, photoURL: 1 });
      VideoCategoriesData[videoCategory.name] = subCategory;
    }
    const VideoCategoriesDataJSON = JSON.stringify(VideoCategoriesData);
    return {
      VideoCategoriesDataJSON
    };
  } catch (err) {
    return new Response({ status: 404, message: err.message });
  }
}
export {
  load
};
