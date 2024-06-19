import mongoose from "mongoose";
const MONGODB_URI = import.meta.env.MONGODB_URI;



async function connect() {
   await mongoose.connect(MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((e) => console.log(e))   
}

export default connect