import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Gallery', GallerySchema);