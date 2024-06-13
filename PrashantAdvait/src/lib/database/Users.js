import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRoles'
    },
    fullname: String,
    email: String,
    password: String,
    phone_number: {
        type: Number, 
        maxLength:10
    },
    status: {
        type: String,
        enum:['active', 'inactive']
    }
   
})


export default mongoose.model('Users', UsersSchema)