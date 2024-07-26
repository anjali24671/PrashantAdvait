import * as server from '../entries/pages/books/my_books/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/my_books/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/books/my_books/+page.server.js";
export const imports = ["_app/immutable/nodes/9.GDXmE-hh.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/web-component.es.BGeO_nnu.js","_app/immutable/chunks/BookHorizontal.Brz4iic6.js"];
export const stylesheets = ["_app/immutable/assets/BookHorizontal.DXnJICHt.css"];
export const fonts = [];
