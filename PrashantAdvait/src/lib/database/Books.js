import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    name: String,
    categoryId: [mongoose.SchemaTypes.ObjectId],
    photoURL: String,
    printLength: {
        type: Number,
        default: 0,
        min:0
    },
    description: String,
    indexContent: String,
    EBookPrice: Number,
    paperBookPrice: Number,
    stocks: Number,
    status: {
        type: String,
        enum:['active', 'inactive']
    }
})


export default mongoose.model('Books', BooksSchema);