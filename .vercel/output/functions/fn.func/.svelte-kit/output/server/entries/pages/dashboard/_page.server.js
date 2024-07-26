import { r as redirect } from "../../../chunks/index2.js";
const load = async ({ locals }) => {
  if (!locals.auth)
    throw redirect(302, `/login`);
};
export {
  load
};
