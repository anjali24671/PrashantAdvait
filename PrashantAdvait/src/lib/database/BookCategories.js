import mongoose from "mongoose";

const BookCategoriesSchema = new mongoose.Schema({
    name: String,
    numberOfBooks: {
        type: Number,
        deafult: 0,
        min:0
    },
    status: {
        type: String,
        enum:['active', 'inactive']
    }
})

export default mongoose.model('BookCategories', BookCategoriesSchema)