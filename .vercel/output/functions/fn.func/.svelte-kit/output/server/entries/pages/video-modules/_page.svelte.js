import { c as create_ssr_component, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { S as Slider } from "../../../chunks/Slider.js";
import "../../../chunks/client.js";
import { V as VideoSeries } from "../../../chunks/VideoSeries2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const VideoCategoriesData = JSON.parse(data.VideoCategoriesDataJSON);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col gap-[40px] mx-5">${each(Object.keys(VideoCategoriesData), (key) => {
    return `<div>${key === "campaign" ? `<div class="flex font-bold text-xl items-center w-full justify-center" data-svelte-h="svelte-kfeb28"><h1>Featured Collections</h1> </div>` : `<div class="flex font-bold text-xl items-center w-full justify-start"><h1>${escape(key)}</h1> </div>`} ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {
      default: () => {
        return `${each(VideoCategoriesData[key], (category) => {
          return `${validate_component(VideoSeries, "VideoSeries").$$render(
            $$result,
            {
              id: category._id,
              photoURL: category.photoURL,
              title: category.title,
              language: category.language
            },
            {},
            {}
          )}`;
        })} `;
      }
    })}</div> <hr>`;
  })}</div>`;
});
export {
  Page as default
};
