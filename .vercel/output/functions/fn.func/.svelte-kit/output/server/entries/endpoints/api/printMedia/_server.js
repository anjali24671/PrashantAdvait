import { c as connect } from "../../../../chunks/connection.js";
import { P as PrintMedia } from "../../../../chunks/PrintMedia.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name || !data.mediaURL || !data.date || !data.source) {
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    document["mediaURL"] = data.mediaURL;
    document["date"] = data.date;
    document["source"] = data.source;
    await connect();
    const newPrintMedia = await PrintMedia.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "PrintMedia added succesfully" }
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
