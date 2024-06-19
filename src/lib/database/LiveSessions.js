import mongoose from "mongoose";

const LiveSessionsSchema = new mongoose.Schema({

    session_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim:true
    }
})

export default mongoose.model('LiveSessions', LiveSessionsSchema)