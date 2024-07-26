import { c as connect } from "../../../../chunks/connection.js";
import { V as VideoCategories } from "../../../../chunks/VideoCategories.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name) {
      console.log("add all details");
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    if (data.status)
      document["status"] = data.status;
    await connect();
    const newVideCategories = await VideoCategories.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "VideoCategories added succesfully" }
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
