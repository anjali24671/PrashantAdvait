import mongoose from "mongoose";
const ArticleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  reading_time: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  views: {
    type: Number,
    default: 0,
    min: 0
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    required: true,
    default: "active",
    enum: ["active", "inactive"]
  }
});
const Articles = mongoose.models.Articles || mongoose.model("Articles", ArticleSchema);
export {
  Articles as A
};
