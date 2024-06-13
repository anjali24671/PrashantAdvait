import mongoose from "mongoose";

const OrderShippingAddressesSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    },
    shippingAddress: String,
    state: String,
    city: String,
    pincode: String,
   
})


export default mongoose.model('OrderShippingAddresses', OrderShippingAddressesSchema)