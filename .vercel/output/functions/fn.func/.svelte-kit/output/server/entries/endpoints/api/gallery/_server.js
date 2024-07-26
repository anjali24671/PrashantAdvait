import { c as connect } from "../../../../chunks/connection.js";
import { G as Gallery } from "../../../../chunks/Gallery.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.imageURL) {
      throw new Error("imageURL is required");
    }
    document["imageURL"] = data.imageURL;
    await connect();
    const newGallery = await Gallery.create(document);
    return new Response(JSON.stringify(
      { success: true, message: `image ${data.name} added succesfully` }
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
