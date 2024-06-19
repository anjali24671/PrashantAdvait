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
        enum: ['active', 'inactive'],
        default: 'active'
    },
    videoSeriesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoSeries',
        required: true
    },
    index: {
        type: String,
        required: true,
    },
    references: {
        type: String,
        required: true,
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
        min: 0,
    },
    duration: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    }
})

export default  mongoose.model('Videos', VideoSchema);