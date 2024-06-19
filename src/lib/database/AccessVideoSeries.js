import mongoose from "mongoose";

const accessVideoSeriesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

export default mongoose.model('AccessVideoSeries', accessVideoSeriesSchema)