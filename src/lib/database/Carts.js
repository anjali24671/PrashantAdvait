import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
       
    },
    Ebook_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EBooks',
        
    },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos',
      
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
    type: {
        type: String,
        required: true
    }

})

export default mongoose.model('Carts', cartsSchema)