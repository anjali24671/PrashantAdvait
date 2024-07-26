import * as server from '../entries/pages/dashboard/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/16.BPspIXiT.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/web-component.es.BGeO_nnu.js"];
export const stylesheets = ["_app/immutable/assets/16.B-xX1ZKj.css"];
export const fonts = [];
