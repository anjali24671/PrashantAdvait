import mongoose from "mongoose";

const DonationsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Users'
    },
    amount: {
        type: Number,
        required: true,
        min:0
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export default mongoose.models.Donations || mongoose.model('Donations', DonationsSchema);