import mongoose from "mongoose";
const VideoSeriesSchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VideoCategories",
    required: true
  },
  photoURL: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
  benefits: {
    type: String,
    required: true
  }
});
const VideoSeries = mongoose.model("VideoSeries", VideoSeriesSchema);
export {
  VideoSeries as V
};
