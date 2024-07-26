import * as server from '../entries/pages/articles/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/+page.server.js";
export const imports = ["_app/immutable/nodes/5.on0sgPlM.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/Slider.E6hP4Lz5.js"];
export const stylesheets = ["_app/immutable/assets/Slider.DufrEVie.css"];
export const fonts = [];
