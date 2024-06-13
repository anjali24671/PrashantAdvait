import mongoose from "mongoose";
import {MONGODB_URI} from "$env/static/private"


async function connectDB() {
   await mongoose.connect(MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((e) => console.log(e))   
}

export default connectDB