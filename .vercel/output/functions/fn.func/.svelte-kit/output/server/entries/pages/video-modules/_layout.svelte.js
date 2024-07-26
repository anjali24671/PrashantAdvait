import { c as create_ssr_component, o as onDestroy, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  onDestroy(() => {
  });
  let inputQuery = "";
  const categories = JSON.parse(data.videoCategories);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><header class="mx-4 my-6 mb-[40px] flex items-center gap-2"><div data-svelte-h="svelte-l01az8"><h2 class="md:text-lg text-sm font-bold italic text-orange-600">Video series</h2></div> <div class="flex gap-4 flex-col border overflow-hidden rounded-[8px]"><div class="flex md:w-[660px] relative"><select class="px-2 md:block hidden border-r text-xs w-[50px]"><option value="" disabled selected hidden data-svelte-h="svelte-3mjajm">All</option>${each(categories, (category) => {
    return `<option${add_attribute("value", category._id, 0)}>${escape(category.name)}</option>`;
  })}</select> <input class="w-full p-2 md:px-2 md:px-[40px] md:rounded-[0px] rounded-[8px]" placeholder="search for videos"${add_attribute("value", inputQuery, 0)}> <button class="md:bg-orange-200 p-2 md:block hidden absolute h-full md:right-0" data-svelte-h="svelte-16g49hp"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg></button> <div class="md:hidden block self-center mx-2 " data-svelte-h="svelte-fjkhlv"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current laptop:h-4 laptop:w-4"><path fill-rule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"></path></svg></div></div></div></header></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
