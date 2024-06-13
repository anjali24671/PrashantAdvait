import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    name: String,
    videoURL: String,
    
    status: {
        type: String,
        enum:['active', 'inactive']
    },
    videoSeriesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoSeries'
    },
    index: String,
    references: String,
    price: Number,
    part: Number,
    duration:Number
})

export default  mongoose.model('Videos', VideoSchema);