import mongoose from "mongoose";

const CartsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
    },
    quantity: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('Carts', CartsSchema)