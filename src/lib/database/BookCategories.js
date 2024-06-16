import mongoose from "mongoose";

const BookCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    numberOfBooks: {
        type: Number,
        default: 0,
        min:0
    },
    status: {
        type: String,
        default:'active',
        enum:['active', 'inactive']
    }
})

export default mongoose.model('BookCategories', BookCategoriesSchema)