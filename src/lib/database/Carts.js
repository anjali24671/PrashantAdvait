import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
       
        default: null // Set default to null
    },
    
    quantity: {
        type: Number,
        default: 0,
        min: 0,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// Create the model
const Carts = mongoose.models.Carts || mongoose.model('Carts', cartsSchema);


export default Carts;
