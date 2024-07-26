import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { b as PUBLIC_USERFRONT_ACCOUNT_ID } from "../../../chunks/public.js";
import Userfront from "@userfront/toolkit/web-components";
const css = {
  code: "article.svelte-etviuh header.svelte-etviuh{display:flex;justify-content:space-between;align-items:baseline}textarea.svelte-etviuh.svelte-etviuh{white-space:pre;overflow-wrap:normal;overflow-x:hidden}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport { PUBLIC_USERFRONT_ACCOUNT_ID } from '$env/static/public';\\r\\n\\r\\n\\timport Userfront from '@userfront/toolkit/web-components';\\r\\n\\tUserfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);\\r\\n\\r\\n\\tconst { user } = Userfront;\\r\\n\\t\\r\\n\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n<h1>Dashboard</h1>\\r\\n\\r\\n<article>\\r\\n\\t<header>\\r\\n\\t\\t<h4>{user.email}</h4>\\r\\n\\t\\t\\r\\n\\t\\t<button on:click={() => Userfront.logout()}>Log out</button>\\r\\n\\t</header>\\r\\n\\r\\n\\t<textarea readonly rows=\\"6\\">Userfront.user = {JSON.stringify(user, null, 4)}</textarea>\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle header {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\talign-items: baseline;\\r\\n\\t}\\r\\n\\r\\n\\ttextarea {\\r\\n\\t\\twhite-space: pre;\\r\\n\\t\\toverflow-wrap: normal;\\r\\n\\t\\toverflow-x: hidden;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAyBC,qBAAO,CAAC,oBAAO,CACd,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,QACd,CAEA,oCAAS,CACR,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,MACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
  const { user } = Userfront;
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-101alym">Dashboard</h1> <article class="svelte-etviuh"><header class="svelte-etviuh"><h4>${escape(user.email)}</h4> <button data-svelte-h="svelte-tecwkd">Log out</button></header> <textarea readonly rows="6" class="svelte-etviuh">${"Userfront.user = " + escape(JSON.stringify(user, null, 4), false)}</textarea> </article>`;
});
export {
  Page as default
};
