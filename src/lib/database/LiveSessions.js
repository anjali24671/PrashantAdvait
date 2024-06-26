import mongoose from "mongoose";

const LiveSessionsSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim:true
    },
    language: {
        type: String,
        required: true,
        enum:['hindi', 'english']
    }
})

export default mongoose.models.LiveSessions || mongoose.model('LiveSessions', LiveSessionsSchema)