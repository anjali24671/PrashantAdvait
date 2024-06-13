import mongoose from "mongoose";

const VideoCategoriesSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        enum:['active', 'inactive']
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoCategories'
    }
})

export default  mongoose.model('VideoCategories', VideoCategoriesSchema);