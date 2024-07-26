import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
const ArticleSubCategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "ArticleCategories",
      required: true,
      trim: true
    },
    numberOfArticles: {
      type: Number,
      default: 0,
      min: 0
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive"
    }
  }
);
const ArticleSubCategories = mongoose.model("ArticleSubCategories", ArticleSubCategoriesSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name || !data.category_id) {
      console.log("add all details");
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    document["category_id"] = data.category_id;
    if (data.numberOfArticles)
      document["numberOfArticles"] = data.numberOfArticles;
    if (data.status)
      document["status"] = data.status;
    await connect();
    const newArticleSubCategories = await ArticleSubCategories.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "ArticleSubCategories added succesfully" }
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
