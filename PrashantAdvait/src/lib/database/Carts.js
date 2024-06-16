import mongoose from "mongoose";

const CartsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0,
        required:true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    }
})

export default mongoose.model('Carts', CartsSchema)