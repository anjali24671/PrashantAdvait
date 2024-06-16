import mongoose from "mongoose";

const ArticleCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
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

export default mongoose.model("ArticleCategories", ArticleCategoriesSchema)
