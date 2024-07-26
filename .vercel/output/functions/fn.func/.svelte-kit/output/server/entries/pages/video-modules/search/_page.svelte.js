import { c as create_ssr_component, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
/* empty css                                                      */
import { V as VideoSeries } from "../../../../chunks/VideoSeries2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.videoSeriesData[0][0] ? `<div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">${each(data.videoSeriesData[0], (video) => {
    return `${validate_component(VideoSeries, "VideoSeries").$$render(
      $$result,
      {
        id: video._id,
        photoURL: video.photoURL,
        title: video.title,
        language: video.language
      },
      {},
      {}
    )}`;
  })}</div>` : `<div class="w-full " data-svelte-h="svelte-12s838j"><div class="flex items-center justify-center"><div>No video series found.</div></div></div>`}`;
});
export {
  Page as default
};
