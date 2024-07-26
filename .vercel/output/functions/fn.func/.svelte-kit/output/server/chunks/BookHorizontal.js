import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { b as PUBLIC_USERFRONT_ACCOUNT_ID } from "./public.js";
import Userfront from "@userfront/toolkit/web-components";
Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
const BookCartAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { book_name } = $$props;
  let { paper_id = "" } = $$props;
  let { Ebook_id = "" } = $$props;
  let { paper_price } = $$props;
  let { show = false } = $$props;
  let bookData = [];
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.book_name === void 0 && $$bindings.book_name && book_name !== void 0)
    $$bindings.book_name(book_name);
  if ($$props.paper_id === void 0 && $$bindings.paper_id && paper_id !== void 0)
    $$bindings.paper_id(paper_id);
  if ($$props.Ebook_id === void 0 && $$bindings.Ebook_id && Ebook_id !== void 0)
    $$bindings.Ebook_id(Ebook_id);
  if ($$props.paper_price === void 0 && $$bindings.paper_price && paper_price !== void 0)
    $$bindings.paper_price(paper_price);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `${show ? `<div class="bg-orange-600 p-6 flex flex-col transform -translate-x-1/2 -translate-y-1/2 w-[400px] absolute top-[50%] left-[50%] z-50"><div class="flex gap-4 items-start justify-between"><div class="flex gap-3"><img class="w-[50px] rounded-md"${add_attribute("src", image, 0)}> <p>${escape(book_name)}</p></div> <button data-svelte-h="svelte-hbtlwf"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" class="h-4 w-4 fill-current"><path fill-rule="evenodd" d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414"></path></svg></button></div> <hr class="m-3 w-full"> <div class="flex flex-col font-semibold text-md gap-4"><div><input type="checkbox" name="productType" value="eBook"${~bookData.indexOf("eBook") ? add_attribute("checked", true, 1) : ""}> <label data-svelte-h="svelte-1f78ple">ebook</label></div> ${paper_price ? `<div><input type="checkbox" name="productType" value="book"${~bookData.indexOf("book") ? add_attribute("checked", true, 1) : ""}> <label>Paperback at: ${escape(paper_price)}</label></div>` : ``} <div class="flex font-normal text-xs items-center gap-1" data-svelte-h="svelte-upu7fi"><span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="h-3 w-3 fill-current laptop:h-4 laptop:w-4"><path fill="current-color" d="M9.636 18.763q1.87 0 3.525-.719a9.36 9.36 0 0 0 4.888-4.888q.714-1.65.714-3.53 0-1.87-.719-3.524a9.4 9.4 0 0 0-1.979-2.918 9.2 9.2 0 0 0-2.913-1.974A8.85 8.85 0 0 0 9.627.5q-1.87 0-3.52.71a9.3 9.3 0 0 0-2.914 1.974 9.3 9.3 0 0 0-1.979 2.918A8.8 8.8 0 0 0 .5 9.627q0 1.88.72 3.53a9.4 9.4 0 0 0 1.978 2.908q1.26 1.26 2.909 1.979 1.65.72 3.53.72m-1.617-4.09q-.301 0-.508-.197a.66.66 0 0 1-.207-.498q0-.283.207-.484a.7.7 0 0 1 .508-.202h1.109V9.288h-.95q-.3 0-.507-.192a.66.66 0 0 1-.207-.503q0-.273.207-.475a.7.7 0 0 1 .507-.202h1.74q.376 0 .568.24.193.24.193.644v4.493h1.08q.302 0 .503.202a.66.66 0 0 1 .202.484q0 .3-.202.498a.7.7 0 0 1-.503.197zM9.57 6.44q-.516 0-.878-.361a1.2 1.2 0 0 1-.362-.87q0-.526.362-.888.361-.362.878-.362.508 0 .87.362.362.361.362.888 0 .507-.362.87a1.2 1.2 0 0 1-.87.361"></path></svg></span> <p>Now you can read eBook on our mobile app</p></div> <button class="bg-green-500 mt-auto h-[40px]" data-svelte-h="svelte-1fka8sc">Add To Cart</button></div></div>` : ``}`;
});
const css = {
  code: ".cardH.svelte-ivfnpb{overflow:hidden;flex:0 0 auto;width:85vw;min-height:120px;max-width:300px;min-width:250px;aspect-ratio:1;box-sizing:border-box}@media(min-width: 600px){.cardH.svelte-ivfnpb{width:45vw}}@media(min-width: 900px){.cardH.svelte-ivfnpb{width:30vw}}@media(min-width: 1200px){.cardH.svelte-ivfnpb{width:20vw}}@media(min-width: 1500px){.cardH.svelte-ivfnpb{width:20vw}}.card-image.svelte-ivfnpb{width:auto;height:100%;-o-object-fit:cover;object-fit:cover}",
  map: `{"version":3,"file":"BookHorizontal.svelte","sources":["BookHorizontal.svelte"],"sourcesContent":["<script>\\r\\n    import addBookToCart from \\"../../routes/utils/addBookToCart\\"\\r\\n    import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';\\r\\n    import BookCartAlert from \\"./BookCartAlert.svelte\\";\\r\\n    import Userfront from '@userfront/toolkit/web-components';\\r\\n    export let image\\r\\n    export let book_name\\r\\n    export let book_id\\r\\n    export let book_price\\r\\n    export let paper_price = 0\\r\\n    export let paper_id\\r\\n    let showCartOption = false\\r\\n\\r\\n    function showCartOptions(){\\r\\n        showCartOption = true\\r\\n    }\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<BookCartAlert show={showCartOption} Ebook_id={book_id} {paper_id} {image}  {book_name} {paper_price}/>\\r\\n\\r\\n\\r\\n<div style=\\"height:22vh;\\" class=\\"overflow-hidden cardH border-2 m-3 border-gray-300 rounded-sm flex hover:border-3 hover:border-orange-600 \\">\\r\\n   \\r\\n        <img src=\\"{image}\\" class=\\"card-image\\" alt=\\"book.name\\" >\\r\\n\\r\\n  \\r\\n    <div class=\\"self-end p-4 flex flex-col justify-center h-full\\">\\r\\n        <a href=\\"/books/{book_id}\\">\\r\\n            <h3 class=\\"font-semibold\\">{book_name}</h3>\\r\\n        </a>\\r\\n       \\r\\n        <p class=\\"text-xs\\">ebook: <span class=\\"font-bold\\"> ₹{book_price}</span></p>\\r\\n        <p class=\\"text-xs\\">Suggested contribution</p>\\r\\n        <p class=\\"text-xs\\"><span class=\\"font-bold\\">₹{paper_price}</span></p>\\r\\n        <div class=\\"mt-4 flex items-center font-semibold text-orange-600 text-sm justify-center\\">\\r\\n            <button on:click={showCartOptions}>Add to Cart</button>\\r\\n        </div>   \\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n      .cardH {\\r\\n        overflow:hidden;\\r\\n        flex: 0 0 auto; /* Prevents flex items from stretching */\\r\\n        width: 85vw; /* Use viewport width for responsiveness */\\r\\n        min-height: 120px; /* Automatically adjust height based on content */\\r\\n        max-width: 300px; /* Max width to prevent excessive growth on large screens */\\r\\n        min-width: 250px; /* Min width to ensure readability on small screens */\\r\\n        aspect-ratio: 1; /* Maintain a square aspect ratio */\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n\\r\\n        \\r\\n    /* Responsive media queries */\\r\\n    @media (min-width: 600px) {\\r\\n        .cardH  {\\r\\n        width: 45vw; /* Adjust width for medium screens */\\r\\n        }\\r\\n    }\\r\\n\\r\\n    @media (min-width: 900px) {\\r\\n        .cardH {\\r\\n        width: 30vw; /* Adjust width for large screens */\\r\\n        }\\r\\n    }\\r\\n\\r\\n    @media (min-width: 1200px) {\\r\\n        .cardH {\\r\\n        width: 20vw; /* Adjust width for extra-large screens */\\r\\n        }\\r\\n    }\\r\\n\\r\\n    @media (min-width: 1500px) {\\r\\n        .cardH {\\r\\n        width: 20vw; /* Adjust width for ultra-large screens */\\r\\n        }\\r\\n    }\\r\\n\\r\\n\\r\\n  .card-image {\\r\\n    width: auto; /* Make image responsive */\\r\\n    height: 100%; /* Maintain aspect ratio */\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover; /* Cover the entire card space */\\r\\n     /* Optional: Rounded corners */\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2CM,oBAAO,CACL,SAAS,MAAM,CACf,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAChB,YAAY,CAAE,CAAC,CACf,UAAU,CAAE,UAChB,CAIA,MAAO,YAAY,KAAK,CAAE,CACtB,oBAAQ,CACR,KAAK,CAAE,IACP,CACJ,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,oBAAO,CACP,KAAK,CAAE,IACP,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,oBAAO,CACP,KAAK,CAAE,IACP,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,oBAAO,CACP,KAAK,CAAE,IACP,CACJ,CAGF,yBAAY,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAEjB"}`
};
const BookHorizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { book_name } = $$props;
  let { book_id } = $$props;
  let { book_price } = $$props;
  let { paper_price = 0 } = $$props;
  let { paper_id } = $$props;
  let showCartOption = false;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.book_name === void 0 && $$bindings.book_name && book_name !== void 0)
    $$bindings.book_name(book_name);
  if ($$props.book_id === void 0 && $$bindings.book_id && book_id !== void 0)
    $$bindings.book_id(book_id);
  if ($$props.book_price === void 0 && $$bindings.book_price && book_price !== void 0)
    $$bindings.book_price(book_price);
  if ($$props.paper_price === void 0 && $$bindings.paper_price && paper_price !== void 0)
    $$bindings.paper_price(paper_price);
  if ($$props.paper_id === void 0 && $$bindings.paper_id && paper_id !== void 0)
    $$bindings.paper_id(paper_id);
  $$result.css.add(css);
  return `${validate_component(BookCartAlert, "BookCartAlert").$$render(
    $$result,
    {
      show: showCartOption,
      Ebook_id: book_id,
      paper_id,
      image,
      book_name,
      paper_price
    },
    {},
    {}
  )} <div style="height:22vh;" class="overflow-hidden cardH border-2 m-3 border-gray-300 rounded-sm flex hover:border-3 hover:border-orange-600  svelte-ivfnpb"><img${add_attribute("src", image, 0)} class="card-image svelte-ivfnpb" alt="book.name"> <div class="self-end p-4 flex flex-col justify-center h-full"><a href="${"/books/" + escape(book_id, true)}"><h3 class="font-semibold">${escape(book_name)}</h3></a> <p class="text-xs">ebook: <span class="font-bold">₹${escape(book_price)}</span></p> <p class="text-xs" data-svelte-h="svelte-1viy97x">Suggested contribution</p> <p class="text-xs"><span class="font-bold">₹${escape(paper_price)}</span></p> <div class="mt-4 flex items-center font-semibold text-orange-600 text-sm justify-center"><button data-svelte-h="svelte-1td7yd1">Add to Cart</button></div></div> </div>`;
});
export {
  BookHorizontal as B,
  BookCartAlert as a
};
