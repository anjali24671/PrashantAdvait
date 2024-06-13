// import mongoose from "mongoose";
// import Users from "./Users";

// const UserRolesSchema = new mongoose.Schema({
  
//     role_name: {
//         type: String,
//         enum:['admin', 'user']
//     },
//     created_at: {
//         type: Date,
//         default: Date.now
//     },
//     updated_at: {
//         type: Date,
//         default:null
//     }
// })




// export default mongoose.model('UserRoles', UserRolesSchema)

// src/lib/database/UserRoles.js
import mongoose from 'mongoose';

const userRolesSchema = new mongoose.Schema({
    role_name: { type: String, required: true }
});

const UserRoles = mongoose.models.UserRoles || mongoose.model('UserRoles', userRolesSchema);
export default UserRoles;
