import mongoose from "mongoose";

const VideoCategories = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
})

export default mongoose.models.VideoCategories || mongoose.model('VideoCategories', VideoCategories);