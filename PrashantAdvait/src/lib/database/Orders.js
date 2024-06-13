import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
    order_number: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    amount: Number,
    scholarshipAmount: Number,
    netAmount: Number,
    quantity: Number,
    status: {
        type: String,
        enum:['placed', 'processing', 'shipping', 'delivered']
    },
    paymentStatus: {
        type: String,
        enum:['paid', 'unpaid']
    },
    paymentType : {
        type: String,
        enum:['cash', 'card', 'UPI']
    },
    paymentTransactionId: {
        type: String,
        unique: true
    }
})

export default mongoose.model('Orders', OrdersSchema);