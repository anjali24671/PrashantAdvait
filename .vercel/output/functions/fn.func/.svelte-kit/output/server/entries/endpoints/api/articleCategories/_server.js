import { c as connect } from "../../../../chunks/connection.js";
import { A as ArticleCategories } from "../../../../chunks/ArticleCategories.js";
async function POST({ request }) {
  const data = await request.json();
  let document = {};
  if (!data.name || !data.level_of_difficulty) {
    throw new Error("fill all details");
  }
  try {
    document["name"] = data.name;
    if (data.numberOfArticles)
      document["numberOfArticles"] = data.numberOfArticles;
    document["level_of_difficulty"] = data.level_of_difficulty;
    if (data.status)
      document["status"] = data.status;
    await connect();
    const newArticleCategory = await ArticleCategories.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "user created succesfully" }
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
