import mongoose from "mongoose";

const UserAllowedResourcesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
      
        ref: 'Videos'
    },
    books_id: {
        type: mongoose.Schema.Types.ObjectId,
      
        ref: 'Books'
        
    },
    article_id: {
        type: mongoose.Schema.Types.ObjectId,
        
        ref: 'Articles'
    },
    validity: {
        type: Date,
        default: null
    }
})

export default mongoose.model('UserAllowedResources', UserAllowedResourcesSchema)