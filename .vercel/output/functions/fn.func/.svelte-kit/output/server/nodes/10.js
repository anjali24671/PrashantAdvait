import * as server from '../entries/pages/books/search/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/books/search/+page.server.js";
export const imports = ["_app/immutable/nodes/10.DZQw78G_.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/BookHorizontal.Brz4iic6.js","_app/immutable/chunks/web-component.es.BGeO_nnu.js","_app/immutable/chunks/searchQuery.D5FMPO_v.js","_app/immutable/chunks/index.D9lnDM6R.js","_app/immutable/chunks/entry.CjnvWq0e.js"];
export const stylesheets = ["_app/immutable/assets/BookHorizontal.DXnJICHt.css"];
export const fonts = [];
