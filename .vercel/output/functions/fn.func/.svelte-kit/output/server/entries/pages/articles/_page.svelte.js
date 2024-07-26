import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Slider } from "../../../chunks/Slider.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
