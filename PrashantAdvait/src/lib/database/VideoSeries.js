import mongoose from "mongoose";

const VideoSeriesSchema = new mongoose.Schema({
    subCategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoSubCategories'
    },
    language: String,
    title: String,
    description: String,
    status: {
        type: String,
        enum:['active', 'inactive']
    },
    benefits: String
})

export default mongoose.model('VideoSeries', VideoSeriesSchema);