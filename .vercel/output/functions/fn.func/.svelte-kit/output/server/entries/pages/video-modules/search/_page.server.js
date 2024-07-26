import { s as search } from "../../../../chunks/search.js";
async function load({ url }) {
  const query = url.searchParams.get("query");
  const videoSeriesData = await search(query, "video_series");
  return {
    videoSeriesData
  };
}
export {
  load
};
