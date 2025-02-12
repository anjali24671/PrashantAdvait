import mongoose from "mongoose";

const PodcastVideosSchema = new mongoose.Schema({
    videoURL: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }

})

export default mongoose.models.PodcastVideos || mongoose.model('PodcastVideos', PodcastVideosSchema);