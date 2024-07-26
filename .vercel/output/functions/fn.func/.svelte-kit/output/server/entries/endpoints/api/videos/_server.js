import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  videoURL: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
  videoSeriesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VideoSeries",
    required: true
  },
  index: {
    type: String,
    required: true
  },
  references: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    min: 0,
    required: true
  },
  part: {
    type: Number,
    default: 0,
    min: 0
  },
  duration: {
    type: Number,
    default: 0,
    min: 0,
    required: true
  }
});
const Videos = mongoose.model("Videos", VideoSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name || !data.videoURL || !data.videoSeriesId || !data.index || !data.references || !data.price || !data.duration) {
      console.log("add all details");
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    document["videoURL"] = data.videoURL;
    document["videoSeriesId"] = data.videoSeriesId;
    document["index"] = data.index;
    document["references"] = data.references;
    document["price"] = data.price;
    document["duration"] = data.duration;
    if (data.status)
      document["status"] = data.status;
    if (data.part)
      document["part"] = data.part;
    await connect();
    const newVideo = await Videos.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "Videos added succesfully" }
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
