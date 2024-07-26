import { c as create_ssr_component, e as escape, b as each, v as validate_component, a as add_attribute } from "../../../../chunks/ssr.js";
const VideoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { reference } = $$props;
  let { duration } = $$props;
  let { language } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  return `<div class="hover:bg-gray-100 rounded-[10px] flex flex-col gap-1 py-4 "><span class="bg-gray-200 py-1 px-2 w-[50px] rounded-md bg-gray-400 text-white font-semibold text-xs" data-svelte-h="svelte-1u581lu">part 1</span> <h1 class="font-semibold text-lg">${escape(title)}</h1> <p class="text-gray-500 text-sm font-semibold">${escape(reference)}</p> <p class="text-xs text-gray-500 font-semibold">${escape(duration)}</p> <span class="bg-blue-200 py-1 px-2 my-2 w-[60px] rounded-md text-xs">${escape(language)}</span> <div class="flex items-center gap-3 text-orange-600 font-semibold text-xs" data-svelte-h="svelte-12ts36q"><a href="#">ADD TO CART</a> <hr class="w-[1px] h-[20px] bg-gray-400"> <a href="#">ENROLL</a></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let series = "";
  if (data) {
    series = JSON.parse(data.series);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="m-4"><div class="flex flex-col gap-5 my-5">${each(series.videoSeries, (video) => {
    return `<h1 class="font-semibold text-lg">${escape(video.title)}</h1> <div class="flex md:flex-row flex-col gap-5"><div class="min-w-[40%] flex flex-col gap-4 "><img alt="video photo" class="rounded-[5px]"${add_attribute("src", video.photoURL, 0)}> <div class="w-[200px] md:block hidden flex flex-col gap-4" data-svelte-h="svelte-1ja1lbb"><p class="font-semibold text-sm">Share this Series</p> <div class="flex my-3 justify-between"><div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="34" viewBox="0 0 19 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h19v34H0z"></path><path fill="#3E6FA7" stroke="#3E6FA7" stroke-width="1.393" d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9z" style="--darkreader-inline-fill: #7ca8ce; --darkreader-inline-stroke: #7ca8ce;" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""></path></g></svg></div> <div><svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h38v34H0z"></path><path fill="#08BBEE" d="M5.213 20.363a7.25 7.25 0 0 0 3.634-.251c-3.548-.578-6.262-3.748-6.262-7.572q0-.09.002-.178a7.2 7.2 0 0 0 3.551.995c-2.13-1.348-3.553-3.773-3.553-6.542a7.8 7.8 0 0 1 1.05-3.931c3.78 4.663 9.323 7.75 15.572 8.17a8 8 0 0 1-.175-1.683c0-4.347 3.415-7.871 7.629-7.871 2.201 0 4.184.962 5.577 2.5a11.8 11.8 0 0 0 4.735-1.898A7.4 7.4 0 0 1 33.728 6.4 12.5 12.5 0 0 0 38 5.19a12.9 12.9 0 0 1-3.712 4.008l.002.173-.004.896c0 12.279-9.647 22.233-21.549 22.233-4.329 0-8.36-1.317-11.737-3.584q.9.108 1.83.109c3.585 0 6.89-1.24 9.532-3.326-3.384 0-6.193-2.242-7.149-5.336" style="--darkreader-inline-fill: #32cbf7;" data-darkreader-inline-fill=""></path></g></svg></div> <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v34H0z"></path><path fill="#06BA27" d="M15.218 1.019c9.364-.445 17.065 7.145 16.774 16.455-.271 8.685-7.533 15.584-16.24 15.452A16 16 0 0 1 9.4 31.509l-.524-.249L.208 33l1.534-8.787A15.9 15.9 0 0 1 0 17.013C-.026 8.503 6.698 1.423 15.218 1.02m.781 3.098a13.06 13.06 0 0 0-9.205 3.804 12.9 12.9 0 0 0-3.812 9.184c0 1.889.393 3.7 1.17 5.392l.245.504.576 1.125-1.084 5.248 5.147-1.217 1.17.58a12.9 12.9 0 0 0 5.793 1.355 12.94 12.94 0 0 0 9.204-3.804 13 13 0 0 0 3.813-9.183c0-3.47-1.354-6.731-3.812-9.184a12.95 12.95 0 0 0-9.205-3.804M9.985 9.543a1.158 1.158 0 0 1 1.729.269l.075.143 1.304 2.943c.147.331.128.709-.044 1.02l-.098.15-.662.854c-.279.36-.316.854-.09 1.249.788 1.368 3.872 4.104 5.338 4.696.37.15.788.088 1.1-.147l.128-.111.758-.77c.26-.265.628-.386.989-.334l.154.033 3.1.888a1.152 1.152 0 0 1 .654 1.727c-.606.955-1.568 2.12-2.771 2.41-2.121.514-5.38.013-9.447-3.775-3.522-3.28-4.453-6.01-4.233-8.177.125-1.23 1.15-2.338 2.016-3.068" style="--darkreader-inline-fill: #54f872;" data-darkreader-inline-fill=""></path></g></svg></div> <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" class="h-7 w-7"><g fill="none" fill-rule="evenodd"><path d="M0 0h35v34H0z"></path><path fill="#0A66C2" fill-rule="nonzero" d="M3.99 8.956c2.172 0 3.99-1.812 3.99-3.978S6.161 1 3.99 1 0 2.812 0 4.978s1.817 3.978 3.99 3.978M.665 33h6.65V10.9H.664zM25.71 10.282c-2.926 0-5.143 1.06-6.34 2.696V10.9h-6.649V33h6.65V20.934c0-3.138 1.684-4.553 4.122-4.553 2.128 0 3.857 1.282 3.857 4.022V33H34V19.43c0-5.966-3.812-9.148-8.29-9.148" style="--darkreader-inline-fill: #62b3f6;" data-darkreader-inline-fill=""></path></g></svg></div></div> </div></div> <div><p>${escape(video.benefits)}</p></div> </div>`;
  })}</div> <div data-svelte-h="svelte-1lugi93"><h1 class="font-semibold text-lg md:mt-2 mt-1">Video Series (6)</h1> <hr></div> <div class="grid my-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      title: "What is brahm? and who is god?",
      reference: "based on selected verses of niralamba upanishad",
      duration: "3 hours and 14 minutes",
      language: "English",
      video_id: "afsdf"
    },
    {},
    {}
  )} ${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      title: "What is brahm? and who is god?",
      reference: "based on selected verses of niralamba upanishad",
      duration: "3 hours and 14 minutes",
      language: "English",
      video_id: "afsdf"
    },
    {},
    {}
  )} ${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      title: "What is brahm? and who is god?",
      reference: "based on selected verses of niralamba upanishad",
      duration: "3 hours and 14 minutes",
      language: "English",
      video_id: "afsdf"
    },
    {},
    {}
  )} ${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      title: "What is brahm? and who is god?",
      reference: "based on selected verses of niralamba upanishad",
      duration: "3 hours and 14 minutes",
      language: "English",
      video_id: "afsdf"
    },
    {},
    {}
  )} ${validate_component(VideoSection, "VideoSection").$$render(
    $$result,
    {
      title: "What is brahm? and who is god?",
      reference: "based on selected verses of niralamba upanishad",
      duration: "3 hours and 14 minutes",
      language: "English",
      video_id: "afsdf"
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
