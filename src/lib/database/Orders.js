import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
    order_number: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min:0
    },
    scholarshipAmount: {
        type: Number,
        required: true,
        min:0
    },
    netAmount: {
        type: Number,
        required: true,
        min:0
    },
    quantity: {
        type: Number,
        required: true,
        min:0
    },
    status: {
        type: String,
        required: true,
        default:"placed",
        enum:['placed', 'processing', 'shipping', 'delivered']
    },
    paymentStatus: {
        type: String,
        required: true,
        default:"unpaid",
        enum:['paid', 'unpaid']
    },
    paymentType : {
        type: String,
        required: true,
        enum:['cash', 'card', 'UPI']
    },
    paymentTransactionId: {
        type: String,
        unique: true,
        required: true
    }
})

export default mongoose.models.Orders || mongoose.model('Orders', OrdersSchema);