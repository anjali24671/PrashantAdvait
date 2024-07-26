import * as server from '../entries/pages/books/_book_id_/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/_book_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/books/[book_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/12.V426iBa_.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/searchQuery.D5FMPO_v.js","_app/immutable/chunks/index.D9lnDM6R.js","_app/immutable/chunks/entry.CjnvWq0e.js"];
export const stylesheets = [];
export const fonts = [];
