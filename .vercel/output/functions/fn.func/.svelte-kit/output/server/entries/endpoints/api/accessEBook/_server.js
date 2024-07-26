import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
import { E as EBooks } from "../../../../chunks/EBooks.js";
const AccessEBookSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  ebook_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EBooks",
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});
const AccessEBook = mongoose.model("AccessEBook", AccessEBookSchema);
async function POST({ request }) {
  const data = await request.json();
  let document = {};
  if (!data.user_id || !data.ebook_id) {
    throw new Error("fill all details");
  }
  try {
    document["user_id"] = data.user_id;
    document["ebook_id"] = data.ebook_id;
    await connect();
    const newAccessEBook = await AccessEBook.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "access to ebook given succesfully" }
    ));
  } catch (e) {
    return new Response(JSON.stringify(
      { "status": 401, message: e.message }
    ));
  }
}
async function GET({ url }) {
  const user_id = url.searchParams.get("user_id");
  try {
    await connect();
    const books = await AccessEBook.find({ user_id });
    let eBookData = [];
    for (let book of books) {
      const id = book.ebook_id;
      const eBooks = await EBooks.find({ _id: id });
      eBookData.push(eBooks);
    }
    return new Response(JSON.stringify(eBookData));
  } catch (error) {
    console.error("Error getting My books", error);
    return new Response(JSON.stringify({ "status": 401, message: error.message }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 401
    });
  }
}
export {
  GET,
  POST
};
