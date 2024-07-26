import * as server from '../entries/pages/cart/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cart/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cart/+page.server.js";
export const imports = ["_app/immutable/nodes/13.uQU6cCsi.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
