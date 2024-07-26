import { c as connect } from "../../../../chunks/connection.js";
import { A as Articles } from "../../../../chunks/Articles.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name || !data.content || !data.reading_time) {
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    document["content"] = data.content;
    document["reading_time"] = data.reading_time;
    if (data["views"])
      document["views"] = data.views;
    if (data["likes"])
      document["likes"] = data.likes;
    if (data["status"])
      document["status"] = data.status;
    await connect();
    const newArticles = await Articles.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "Article added succesfully" }
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
