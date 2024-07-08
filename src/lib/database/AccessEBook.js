import mongoose from "mongoose";

const AccessEBookSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    ebook_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EBooks',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

export default mongoose.model('AccessEBook', AccessEBookSchema)