import * as server from '../entries/pages/video-modules/search/_page.server.js';

export const index = 28;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/video-modules/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/video-modules/search/+page.server.js";
export const imports = ["_app/immutable/nodes/28.BtBYvvFf.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.CjnvWq0e.js","_app/immutable/chunks/index.D9lnDM6R.js","_app/immutable/chunks/VideoSeries.BA8AvgXP.js"];
export const stylesheets = ["_app/immutable/assets/Slider.DufrEVie.css","_app/immutable/assets/VideoSeries.UEBfV0C0.css"];
export const fonts = [];
