import { c as connect } from "../../../../chunks/connection.js";
import { P as PodcastVideos } from "../../../../chunks/PodcastVideos.js";
async function POST({ request }) {
  const data = await request.json();
  try {
    let document = {};
    if (!data.name || !data.videoURL) {
      throw new Error("please fill all details");
    }
    document["name"] = data.name;
    document["videoURL"] = data.videoURL;
    await connect();
    const newPodcastVideos = await PodcastVideos.create(document);
    return new Response(JSON.stringify(
      { success: true, message: "PodcastVideos added succesfully" }
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
