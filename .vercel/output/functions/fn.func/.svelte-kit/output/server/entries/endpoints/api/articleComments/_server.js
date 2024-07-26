import { c as connect } from "../../../../chunks/connection.js";
import mongoose from "mongoose";
import "../../../../chunks/Articles.js";
const ArticleCommentsSchema = new mongoose.Schema({
  articleId: {
    type: mongoose.Types.ObjectId,
    ref: "Articles",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"]
  }
});
const ArticleComments = mongoose.model("ArticleComments", ArticleCommentsSchema);
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.articleId || !data.content) {
      throw new Error("articleId and content is required");
    }
    document["articleId"] = data.articleId;
    document["content"] = data.content;
    if (!data.status)
      document["status"] = "active";
    else
      document["status"] = data.status;
    await connect();
    const newArticleComments = await ArticleComments.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "comment added succesfully" }
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
