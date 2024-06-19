import mongoose from "mongoose";

const TalksSchema = new mongoose.Schema({
    institute_name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    posterURL: {
        type: String,
        required: true
    }
})

export default mongoose.model('Talks', TalksSchema);