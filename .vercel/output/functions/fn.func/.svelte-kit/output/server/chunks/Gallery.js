import mongoose from "mongoose";
const GallerySchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
    trim: true
  }
});
const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
export {
  Gallery as G
};
