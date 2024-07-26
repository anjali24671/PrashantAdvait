import { V as VideoSeries } from "../../../../chunks/VideoSeries.js";
import { c as connect } from "../../../../chunks/connection.js";
async function load({ params }) {
  try {
    await connect();
    const series_id = params.series_id;
    const videoSeriesResponse = await VideoSeries.find({ _id: series_id });
    let videoSeries = {};
    videoSeries["videoSeries"] = videoSeriesResponse;
    const series = JSON.stringify(videoSeries);
    return {
      series
    };
  } catch (e) {
    return {
      status: 401,
      message: e.message
    };
  }
}
export {
  load
};
