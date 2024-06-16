import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    role_name: {
        type: String,
        ref: 'UserRoles',
        required:true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: Number, 
        maxLength: 10,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
        
    }
   
})


export default mongoose.model('Users', UsersSchema)