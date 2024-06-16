import mongoose from "mongoose";

const EBookContentSchema = new mongoose.Schema({
    EBookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },
    content: {type: String, required: true}
})

export default mongoose.model('EBookContents', EBookContentSchema)