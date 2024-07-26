import * as server from '../entries/pages/video-modules/_layout.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/video-modules/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/video-modules/+layout.server.js";
export const imports = ["_app/immutable/nodes/3.Dq2yLR7V.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/searchQuery.D5FMPO_v.js","_app/immutable/chunks/index.D9lnDM6R.js","_app/immutable/chunks/entry.CjnvWq0e.js"];
export const stylesheets = [];
export const fonts = [];
