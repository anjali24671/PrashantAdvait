import mongoose from "mongoose";
import Articles from "./Articles";

const ArticleCommentsSchema = new mongoose.Schema({
    articleId: {
        type: mongoose.Types.ObjectId,
        ref: "Articles",
        required:true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    }
})

export default mongoose.model('ArticleCommentsSchema', ArticleCommentsSchema)