import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const TalksSchema = new mongoose.Schema({
  institute_name: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  posterURL: {
    type: String,
    required: true
  }
});
const Talks = mongoose.model("Talks", TalksSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.institute_name || !data.date || !data.posterURL) {
      throw new Error("please fill all details");
    }
    document["institute_name"] = data.institute_name;
    document["date"] = data.date;
    document["posterURL"] = data.posterURL;
    await connect();
    const newTalks = await Talks.create(document);
    return new Response(JSON.stringify(
      { success: true, message: `talk with ${data.institute_name} added succesfully` }
    ));
  } catch (e) {
    return new Response(JSON.stringify(
      { status: 401, message: e.message }
    ));
  }
}
export {
  POST
};
