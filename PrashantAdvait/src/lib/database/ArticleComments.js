import mongoose from "mongoose";
import Articles from "./Articles";

const ArticleCategoriesSchema = new mongoose.Schema({
    articleId: {
        type: mongoose.Types.ObjectId,
        ref: "Articles"
    },
    content: String,
    status: {
        type: String,
        else: ['active', 'inactive']
    }
})

export default mongoose.model('ArticleCategories', ArticleCategoriesSchema)