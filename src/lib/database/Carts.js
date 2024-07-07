import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        unique:true,
        default: null // Set default to null
    },
    Ebook_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EBooks',
        default: null // Set default to null
    },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
      
        ref: 'Videos',
        default: null // Set default to null
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0,
        required: true
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
const Carts = mongoose.model('Carts', cartsSchema);


export default Carts;
