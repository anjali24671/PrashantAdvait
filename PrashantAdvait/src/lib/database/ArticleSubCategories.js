import mongoose from "mongoose";

const ArticleSubCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'ArticleCategories',
        required: true,
        trim: true,
    },
    numberOfArticles: {
        type: Number,
        default: 0,
        min:0
    },
    status: {
        type: String, 
        enum: ['active', 'inactive'],
        default:'inactive'
    }
    }
)

export default mongoose.model("ArticleSubCategories", ArticleSubCategoriesSchema)
