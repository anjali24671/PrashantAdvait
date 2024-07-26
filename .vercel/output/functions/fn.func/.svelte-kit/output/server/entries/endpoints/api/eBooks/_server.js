import { c as connect } from "../../../../chunks/connection.js";
import { E as EBooks } from "../../../../chunks/EBooks.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name || !data.content || !data.photoURL || !data.content || !data.description || !data.indexContent || !data.price || !data.language) {
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    document["content"] = data.content;
    document["language"] = data.language;
    document["photoURL"] = data.photoURL;
    document["description"] = data.description;
    document["indexContent"] = data.indexContent;
    document["price"] = data.price;
    if (data["status"])
      document["status"] = data["status"];
    if (data["created_at"])
      document["created_at"] = data["created_at"];
    if (data["tags"])
      document["tags"] = data["tags"];
    await connect();
    const newEBooks = await EBooks.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "EBooks added succesfully" }
    ));
  } catch (e) {
    return new Response(JSON.stringify(
      { status: 401, message: e.message }
    ));
  }
}
async function GET({ url }) {
  const query = url.searchParams.get("query");
  const price = Number(url.searchParams.get("price"));
  try {
    await connect();
    const regex = new RegExp(query, "i");
    let eBooks;
    if (query) {
      eBooks = await EBooks.find({ name: { $regex: regex } });
    } else {
      if (price) {
        eBooks = await EBooks.find({ price });
      } else {
        eBooks = await EBooks.find();
      }
    }
    return new Response(JSON.stringify(eBooks));
  } catch (error) {
    console.error("Error fetching eBooks:", error);
    return new Response(JSON.stringify({ status: 401, message: error.message }), {
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
