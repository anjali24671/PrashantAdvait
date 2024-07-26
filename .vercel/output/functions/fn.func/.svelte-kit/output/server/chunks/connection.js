import mongoose from "mongoose";
const MONGODB_URI = "mongodb://127.0.0.1:27017/PrashantAdvait";
async function connect() {
  await mongoose.connect(MONGODB_URI).then(() => console.log("connected")).catch((e) => console.log(e));
}
export {
  connect as c
};
