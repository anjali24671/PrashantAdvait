import mongoose from "mongoose";

const userEnrolledSessionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    session_name: {
        type: String,
        required: true,
        trim:true
    },
    validity: {
        type: Date,
        default: null
    }
})

export default mongoose.model('userEnrolledSession', userEnrolledSessionSchema)