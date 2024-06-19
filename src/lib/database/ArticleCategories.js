import mongoose from "mongoose";

const ArticleCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
    },
    level_of_difficulty: {
        type: String, 
        required: true,
        enum:['beginner', 'intermediate', 'advanced']
    }
    }
)

export default mongoose.models.ArticleCategories || mongoose.model('ArticleCategories', ArticleCategoriesSchema);
