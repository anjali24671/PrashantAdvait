import mongoose from "mongoose";

const OrderShippingAddressesSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders',
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true,

    },
   
})


export default mongoose.model('OrderShippingAddresses', OrderShippingAddressesSchema)