import { c as create_ssr_component, b as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let goodData = JSON.parse(data.carts);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1b8ufev">carts</h1> ${each(goodData, (product) => {
    return `<h2>${escape(product.quantity)}</h2> <h2>${escape(product.product_id)}</h2> <button data-svelte-h="svelte-1gaadki">print me in console</button>`;
  })}`;
});
export {
  Page as default
};
