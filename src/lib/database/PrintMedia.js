import mongoose from "mongoose";

const PrintMediaSchema = new mongoose.Schema({
    mediaURL:{
        type: String, 
        required: true,
        trim:true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    source: {
        type: String,
        required: true,
    
    }
})

export default mongoose.models.PrintMedia || mongoose.model('PrintMedia', PrintMediaSchema);