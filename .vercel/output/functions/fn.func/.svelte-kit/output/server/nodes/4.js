import * as server from '../entries/pages/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/4.BAF92Nkg.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Slider.E6hP4Lz5.js","_app/immutable/chunks/SliderAuto.CXPgaUy6.js","_app/immutable/chunks/entry.CjnvWq0e.js","_app/immutable/chunks/index.D9lnDM6R.js"];
export const stylesheets = ["_app/immutable/assets/4.Cn3M_G6I.css","_app/immutable/assets/Slider.DufrEVie.css","_app/immutable/assets/SliderAuto.B-8TsoJ7.css"];
export const fonts = [];
