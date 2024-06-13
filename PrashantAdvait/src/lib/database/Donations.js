import mongoose from "mongoose";

const DonationsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    amount: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Donations', DonationsSchema);