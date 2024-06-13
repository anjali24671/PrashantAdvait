import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    name: String,
    content: String,
    reading_time: {
        type: Number,
        default: 0,
        min:0
    },
    views: {
        type: Number,
        default: 0,
        min:0
    },
    likes: {
        type: Number,
        default: 0,
        min:0
    },
    status: {
        type: String,
        enum:['active', 'inactive']
    }
})

export default mongoose.model('Articles', ArticleSchema);