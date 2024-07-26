import mongoose from "mongoose";
const VideoCategories = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
});
const VideoCategories$1 = mongoose.models.VideoCategories || mongoose.model("VideoCategories", VideoCategories);
export {
  VideoCategories$1 as V
};
