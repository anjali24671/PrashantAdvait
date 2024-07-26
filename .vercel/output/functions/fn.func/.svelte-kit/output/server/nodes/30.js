import * as server from '../entries/pages/video-modules/_series_id_/_page.server.js';

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/video-modules/_series_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/video-modules/[series_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/30.CpGpbomm.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
