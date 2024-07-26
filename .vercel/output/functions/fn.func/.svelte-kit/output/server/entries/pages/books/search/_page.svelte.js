import { c as create_ssr_component, o as onDestroy, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { B as BookHorizontal } from "../../../../chunks/BookHorizontal.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${!data.booksData[0] ? `<div class="w-full " data-svelte-h="svelte-1yt77zr"><div class="flex items-center justify-center"><div>No books found.</div></div></div>` : `<div class="m-[2vw] flex justify-center md:justify-start items-center"><div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">${each(data.booksData, (book) => {
    return `${book.paper_price ? `${validate_component(BookHorizontal, "BookHorizontal").$$render(
      $$result,
      {
        image: book.photoURL,
        book_name: book.name,
        book_id: book._id,
        book_price: book.price,
        paper_price: book.paper_price
      },
      {},
      {}
    )}` : `${validate_component(BookHorizontal, "BookHorizontal").$$render(
      $$result,
      {
        image: book.photoURL,
        book_name: book.name,
        book_id: book._id,
        book_price: book.price
      },
      {},
      {}
    )}`}`;
  })}</div></div>`}`;
});
export {
  Page as default
};
