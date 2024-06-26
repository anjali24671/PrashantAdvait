import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
   
    photoURL: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    printLength: {
        type: Number,
        required: true,
        default: 0,
        min:0
    },
    description: String,
    indexContent: String,
    
    price:  {
        type: Number,
        required: true,
        min: 0
    },
    stocks:  {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        required: true,
        default:'inactive',
        enum:['active', 'inactive']
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    number_of_orders: {
        type: Number,
        default: 0,
        min:0
    },
    tags: {
        type: [String],
        default: [],
        trim: true
    }
})


export default mongoose.models.Books || mongoose.model('Books', BooksSchema);