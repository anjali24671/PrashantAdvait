import { c as create_ssr_component, o as onDestroy, b as each, v as validate_component } from "../../../../../chunks/ssr.js";
import { B as BookHorizontal } from "../../../../../chunks/BookHorizontal.js";
import "../../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${!data.ebooks[0] ? `<h1 data-svelte-h="svelte-1xd3tge">no books exist</h1>` : `<div class="m-[2vw] flex justify-center md:justify-start items-center"><div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">${each(data.ebooks, (ebook) => {
    return `${ebook.paper_price ? `${validate_component(BookHorizontal, "BookHorizontal").$$render(
      $$result,
      {
        image: ebook.photoURL,
        book_name: ebook.name,
        book_id: ebook._id,
        book_price: ebook.price,
        paper_price: ebook.paper_price
      },
      {},
      {}
    )}` : `${validate_component(BookHorizontal, "BookHorizontal").$$render(
      $$result,
      {
        image: ebook.photoURL,
        book_name: ebook.name,
        book_id: ebook._id,
        book_price: ebook.price
      },
      {},
      {}
    )}`}`;
  })}</div></div>`}`;
});
export {
  Page as default
};
