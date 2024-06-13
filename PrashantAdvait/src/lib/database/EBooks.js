import mongoose from "mongoose";

const EBookContentSchema = new mongoose.Schema({
    EBookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
    },
    content: String
})

export default mongoose.model('EBookContents', EBookContentSchema)