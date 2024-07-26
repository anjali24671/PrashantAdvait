import { c as create_ssr_component, b as each, v as validate_component } from "../../../../../chunks/ssr.js";
import { V as VideoSeries } from "../../../../../chunks/VideoSeries2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const series = JSON.parse(data.videoSeries);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${series ? `<div class="grid lg:grid-cols-4 lg:mx-[20px] md:grid-cols-3 place-items-center grid-cols-2 ">${each(series, (ser) => {
    return `${validate_component(VideoSeries, "VideoSeries").$$render(
      $$result,
      {
        id: ser._id,
        photoURL: ser.photoURL,
        title: ser.title,
        language: ser.language
      },
      {},
      {}
    )}`;
  })}</div>` : `<div class="w-full bg-red-500" data-svelte-h="svelte-1741rz0"><div class="flex items-center justify-center"><div>No video series found.</div></div></div>`}`;
});
export {
  Page as default
};
