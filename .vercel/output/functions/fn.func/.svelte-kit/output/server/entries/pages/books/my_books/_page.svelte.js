import { c as create_ssr_component, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { b as PUBLIC_USERFRONT_ACCOUNT_ID } from "../../../../chunks/public.js";
import Userfront from "@userfront/toolkit/web-components";
import { B as BookHorizontal } from "../../../../chunks/BookHorizontal.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
  let { data } = $$props;
  const eBooks = data.props?.eBooks[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1cu3h1c">I am MY BOOK</h1> <p data-svelte-h="svelte-1qskjvl">Radhey Radhey bol, Barsana mein dol</p> ${eBooks ? `<div class="m-[2vw] flex justify-start items-center"><div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">${each(eBooks, (ebook) => {
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
  })}</div></div>` : `<p data-svelte-h="svelte-z4dk68">No eBooks found.</p>`}`;
});
export {
  Page as default
};
