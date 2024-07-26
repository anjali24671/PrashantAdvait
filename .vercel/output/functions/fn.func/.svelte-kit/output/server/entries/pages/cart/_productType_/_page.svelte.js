import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-gx0bze">hello</h1> <h2>${escape(data.good)}</h2> <button data-svelte-h="svelte-1ywzle9"><a href="/cart/">go to carts</a></button>`;
});
export {
  Page as default
};
