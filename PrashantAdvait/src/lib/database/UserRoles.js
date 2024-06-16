import mongoose from "mongoose";

const UserRolesSchema = new mongoose.Schema({
  
    role_name: {
        type: String,
        required: true,
        trim: true,
        default:'user',
        enum:['admin', 'user']
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default:null
    }
})




export default mongoose.model('UserRoles', UserRolesSchema)
