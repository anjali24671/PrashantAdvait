import { redirect } from '@sveltejs/kit';



// Protected route. Redirect if not logged in.
export const load = async ({ locals }) => {
	// if (!locals.auth) throw redirect(302, `/login`);
};