import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, o as onDestroy, b as each } from "../../../chunks/ssr.js";
import { S as Slider } from "../../../chunks/Slider.js";
import { a as BookCartAlert, B as BookHorizontal } from "../../../chunks/BookHorizontal.js";
import "../../../chunks/client.js";
const css = {
  code: ".card-image.svelte-wr24xq{width:auto;height:auto;-o-object-fit:contain;object-fit:contain;border-radius:10x}.cardV.svelte-wr24xq{overflow:hidden;flex:0 0 auto;width:180px;height:400px;aspect-ratio:1;box-sizing:border-box}",
  map: '{"version":3,"file":"BookVertical.svelte","sources":["BookVertical.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n    import BookCartAlert from \\"./BookCartAlert.svelte\\";\\r\\n\\r\\n    export let image\\r\\n    export let book_name\\r\\n    export let book_id\\r\\n    export let book_price\\r\\n    export let paper_id\\r\\n    export let paper_price = 0\\r\\n\\r\\n    let showCartOption = false\\r\\n\\r\\n  function showCartOptions(){\\r\\n      showCartOption = true\\r\\n  }\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<BookCartAlert show={showCartOption} Ebook_id={book_id} {paper_id} {image}  {book_name} {paper_price}/>\\r\\n\\r\\n\\r\\n<div  class=\\"cardV p-3 bg-white overflow-hidden  md:m-3 m-1 border-2 border-[#fff4ee] hover:border-orange-600 flex flex-col  items-center   \\">\\r\\n    <img class=\\"card-image\\" src=\\"{image}\\" alt=\\"book.name\\" >\\r\\n    <div class=\\"self-end  w-full flex flex-col justify-center h-full\\">\\r\\n        <a href=\\"/books/{book_id}\\">\\r\\n          <h3 class=\\"font-semibold\\">{book_name}</h3>\\r\\n        </a>\\r\\n        <p class=\\"text-xs \\">ebook: <span class=\\"font-bold\\">₹{book_price}</span></p>\\r\\n        <p class=\\"text-xs\\">Suggested contribution</p>\\r\\n        <p class=\\"text-xs\\">Paperback:</p>\\r\\n        <div class=\\"mt-4 flex items-center font-semibold text-orange-600 text-sm justify-center\\">\\r\\n          <button on:click={showCartOptions}>Add to Cart</button>\\r\\n        </div>   \\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n    \\r\\n  .card-image {\\r\\n    width: auto; /* Make image responsive */\\r\\n    height: auto; /* Maintain aspect ratio */\\r\\n    -o-object-fit: contain;\\r\\n       object-fit: contain; /* Cover the entire card space */\\r\\n    border-radius: 10x; /* Optional: Rounded corners */\\r\\n  }\\r\\n\\r\\n  .cardV {\\r\\n    overflow:hidden;\\r\\n    flex: 0 0 auto; /* Prevents flex items from stretching */\\r\\n    width: 180px; /* Use viewport width for responsiveness */\\r\\n    height: 400px; /* Automatically adjust height based on content */\\r\\n    aspect-ratio: 1; /* Maintain a square aspect ratio */\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAwCE,yBAAY,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,OAAO,CACnB,UAAU,CAAE,OAAO,CACtB,aAAa,CAAE,GACjB,CAEA,oBAAO,CACL,SAAS,MAAM,CACf,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,YAAY,CAAE,CAAC,CACf,UAAU,CAAE,UACd"}'
};
const BookVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { book_name } = $$props;
  let { book_id } = $$props;
  let { book_price } = $$props;
  let { paper_id } = $$props;
  let { paper_price = 0 } = $$props;
  let showCartOption = false;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.book_name === void 0 && $$bindings.book_name && book_name !== void 0)
    $$bindings.book_name(book_name);
  if ($$props.book_id === void 0 && $$bindings.book_id && book_id !== void 0)
    $$bindings.book_id(book_id);
  if ($$props.book_price === void 0 && $$bindings.book_price && book_price !== void 0)
    $$bindings.book_price(book_price);
  if ($$props.paper_id === void 0 && $$bindings.paper_id && paper_id !== void 0)
    $$bindings.paper_id(paper_id);
  if ($$props.paper_price === void 0 && $$bindings.paper_price && paper_price !== void 0)
    $$bindings.paper_price(paper_price);
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
  )} <div class="cardV p-3 bg-white overflow-hidden md:m-3 m-1 border-2 border-[#fff4ee] hover:border-orange-600 flex flex-col items-center  svelte-wr24xq"><img class="card-image svelte-wr24xq"${add_attribute("src", image, 0)} alt="book.name"> <div class="self-end w-full flex flex-col justify-center h-full"><a href="${"/books/" + escape(book_id, true)}"><h3 class="font-semibold">${escape(book_name)}</h3></a> <p class="text-xs ">ebook: <span class="font-bold">₹${escape(book_price)}</span></p> <p class="text-xs" data-svelte-h="svelte-1viy97x">Suggested contribution</p> <p class="text-xs" data-svelte-h="svelte-1toqifr">Paperback:</p> <div class="mt-4 flex items-center font-semibold text-orange-600 text-sm justify-center"><button data-svelte-h="svelte-1td7yd1">Add to Cart</button></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-[47px] mt-[50px] "><div class="flex flex-col gap-[70px]"><div><h1 class="md:text-xl text-lg font-semibold mx-3 " data-svelte-h="svelte-7nm8ac">NEW RELEASE</h1> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.newRelease.newReleaseBooks, (book) => {
        return `${validate_component(BookHorizontal, "BookHorizontal").$$render(
          $$result,
          {
            image: book.photoURL,
            book_name: book.name,
            book_price: book.price,
            book_id: book.id,
            paper_id: book.paperID,
            paper_price: book.paperPrice
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div> <div class="bg-[#f1f5f9] p-4"><h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1" data-svelte-h="svelte-py1h2z">SPIRITUAL WISDOM</h1> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.newCategories.spiritualWisdomResponse, (book) => {
        return `${validate_component(BookVertical, "BookVertical").$$render(
          $$result,
          {
            image: book.photoURL,
            paper_id: book.paperID,
            book_name: book.name,
            book_id: book._id,
            book_price: book.price,
            paper_price: book.paperPrice
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div> <div class="flex md:flex-row flex-col my-5 gap-5"><div class="md:w-[47%] bg-[#f1f5f9] p-3"><h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1" data-svelte-h="svelte-1yid4rf">VEGANISM AND ENVIRONMENT</h1> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.newCategories.veganismResponse, (book) => {
        return `${validate_component(BookVertical, "BookVertical").$$render(
          $$result,
          {
            image: book.photoURL,
            paper_id: book.paperID,
            book_name: book.name,
            book_id: book._id,
            book_price: book.price,
            paper_price: book.paperPrice
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div> <div class="md:w-[50%] bg-[#f1f5f9] p-3"><h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1 " data-svelte-h="svelte-h535k9">LIFE PROBLEMS</h1> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.newCategories.lifeProblemCategoryResponse, (book) => {
        return `${validate_component(BookVertical, "BookVertical").$$render(
          $$result,
          {
            image: book.photoURL,
            paper_id: book.paperID,
            book_name: book.name,
            book_id: book._id,
            book_price: book.price,
            paper_price: book.paperPrice
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div></div> <div class="bg-[#f1f5f9] p-4"><h1 class="text-lg md:text-xl font-semibold md:mx-3 mx-1" data-svelte-h="svelte-v5jtaj">BESTSELLERS</h1> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.loadBestSeller.bestSellerBooks, (book) => {
        return `${validate_component(BookVertical, "BookVertical").$$render(
          $$result,
          {
            image: book.photoURL,
            paper_id: book.paperID,
            book_name: book.name,
            book_id: book.id,
            book_price: book.price,
            paper_price: book.paperPrice
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}</div></div></div>`;
});
export {
  Page as default
};
