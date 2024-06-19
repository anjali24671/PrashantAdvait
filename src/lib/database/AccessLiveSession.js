import mongoose from "mongoose";

const AccessLiveSessionsSchema = new mongoose.Schema({

    session_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
        
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
  
})

export default mongoose.model('AccessLiveSessions', AccessLiveSessionsSchema)