import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SliderAuto } from "../../../chunks/SliderAuto.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SliderAuto, "SliderAuto").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
