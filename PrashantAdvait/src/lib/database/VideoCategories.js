import mongoose from "mongoose";

const VideoCategories = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        enum:['active', 'inactive']
    }
})

export default mongoose.model('VideoCategories', VideoCategories);