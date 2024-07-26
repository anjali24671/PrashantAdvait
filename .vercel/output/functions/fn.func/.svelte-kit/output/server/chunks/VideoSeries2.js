import { c as create_ssr_component, e as escape, a as add_attribute } from "./ssr.js";
const css = {
  code: ".card.svelte-12j97wk{flex:0 0 auto;max-width:300px;min-width:150px;box-sizing:border-box}.card-image.svelte-12j97wk{-o-object-fit:cover;object-fit:cover;border-radius:10px}@media(min-width: 600px){.card.svelte-12j97wk{width:45vw}}@media(min-width: 900px){.card.svelte-12j97wk{width:30vw}}@media(min-width: 1200px){.card.svelte-12j97wk{width:27vw}}@media(min-width: 1500px){.card.svelte-12j97wk{width:25vw}}",
  map: `{"version":3,"file":"VideoSeries.svelte","sources":["VideoSeries.svelte"],"sourcesContent":["<script>\\r\\n    export let id = ''\\r\\n    export let photoURL\\r\\n    export let title\\r\\n    export let language = ''\\r\\n    export let description=''\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<div class=\\"card relative mt-3 hover:bg-gray-200 text-lg p-3  rounded-[7px]\\">\\r\\n    <a href=\\"/video-modules/{id}\\">\\r\\n      <img src=\\"{photoURL}\\" alt=\\"unable to load\\" draggable=\\"false\\"  class=\\"card-image mb-3 \\">\\r\\n    </a>\\r\\n    <h1 class=\\"font-semibold \\">{title}</h1>\\r\\n    <button class=\\"text-xs border px-2 bg-[#c7e6f8] rounded-[5px]\\">{language}</button>\\r\\n  \\r\\n\\r\\n    {#if description}\\r\\n      <p class=\\"truncate \\">{description}</p>\\r\\n    {/if}\\r\\n</div>\\r\\n\\r\\n\\r\\n \\r\\n<style>\\r\\n    \\r\\n    .card {\\r\\n      flex: 0 0 auto; /* Prevents flex items from stretching */\\r\\n      /* Use viewport width for responsiveness */\\r\\n     /* Automatically adjust height based on content */\\r\\n      max-width: 300px; /* Max width to prevent excessive growth on large screens */\\r\\n      min-width: 150px; /* Min width to ensure readability on small screens */\\r\\n      /* Maintain a square aspect ratio */\\r\\n      box-sizing: border-box;\\r\\n    }\\r\\n  \\r\\n    .card-image {\\r\\n   /* Maintain aspect ratio */\\r\\n      -o-object-fit: cover;\\r\\n         object-fit: cover; /* Cover the entire card space */\\r\\n      border-radius: 10px; /* Optional: Rounded corners */\\r\\n    }\\r\\n  \\r\\n    /* Responsive media queries */\\r\\n    @media (min-width: 600px) {\\r\\n      .card  {\\r\\n        width: 45vw; /* Adjust width for medium screens */\\r\\n      }\\r\\n    }\\r\\n  \\r\\n    @media (min-width: 900px) {\\r\\n      .card {\\r\\n        width: 30vw; /* Adjust width for large screens */\\r\\n      }\\r\\n    }\\r\\n  \\r\\n    @media (min-width: 1200px) {\\r\\n      .card {\\r\\n        width: 27vw; /* Adjust width for extra-large screens */\\r\\n      }\\r\\n    }\\r\\n  \\r\\n    @media (min-width: 1500px) {\\r\\n      .card {\\r\\n        width: 25vw; /* Adjust width for ultra-large screens */\\r\\n      }\\r\\n    }\\r\\n  </style>\\r\\n  \\r\\n  \\r\\n  \\r\\n    "],"names":[],"mappings":"AA0BI,oBAAM,CACJ,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAGd,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KAAK,CAEhB,UAAU,CAAE,UACd,CAEA,0BAAY,CAEV,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,aAAa,CAAE,IACjB,CAGA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAO,CACL,KAAK,CAAE,IACT,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAM,CACJ,KAAK,CAAE,IACT,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,oBAAM,CACJ,KAAK,CAAE,IACT,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,oBAAM,CACJ,KAAK,CAAE,IACT,CACF"}`
};
const VideoSeries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { photoURL } = $$props;
  let { title } = $$props;
  let { language = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.photoURL === void 0 && $$bindings.photoURL && photoURL !== void 0)
    $$bindings.photoURL(photoURL);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `<div class="card relative mt-3 hover:bg-gray-200 text-lg p-3 rounded-[7px] svelte-12j97wk"><a href="${"/video-modules/" + escape(id, true)}"><img${add_attribute("src", photoURL, 0)} alt="unable to load" draggable="false" class="card-image mb-3  svelte-12j97wk"></a> <h1 class="font-semibold ">${escape(title)}</h1> <button class="text-xs border px-2 bg-[#c7e6f8] rounded-[5px]">${escape(language)}</button> ${description ? `<p class="truncate ">${escape(description)}</p>` : ``} </div>`;
});
export {
  VideoSeries as V
};
