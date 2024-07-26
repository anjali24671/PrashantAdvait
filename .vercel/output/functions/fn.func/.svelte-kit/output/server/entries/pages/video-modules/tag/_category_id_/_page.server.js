import "../../../../../chunks/VideoCategories.js";
import { V as VideoSeries } from "../../../../../chunks/VideoSeries.js";
import { c as connect } from "../../../../../chunks/connection.js";
async function load({ params }) {
  try {
    await connect();
    const videoSeriesRes = await VideoSeries.find({ category_id: params.category_id }, { title: 1, language: 1, photoURL: 1 });
    const videoSeries = JSON.stringify(videoSeriesRes);
    return {
      videoSeries
    };
  } catch (err) {
    return new Response({ status: 404, message: err.message });
  }
}
export {
  load
};
