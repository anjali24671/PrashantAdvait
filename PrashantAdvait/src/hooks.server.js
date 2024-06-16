import {
	PUBLIC_USERFRONT_ACCOUNT_ID,
	PUBLIC_USERFRONT_PUBLIC_KEY_BASE64
} from '$env/static/public';

import { userfrontCookieToTokens, verifyToken } from 'userfront-svelte';

export async function handle({ event, resolve }) {
    const cookie = event.request.headers.get('cookie');
    const userfrontTokens = await userfrontCookieToTokens(cookie, PUBLIC_USERFRONT_ACCOUNT_ID);
   

	event.locals.auth = await verifyToken(
		PUBLIC_USERFRONT_PUBLIC_KEY_BASE64,
		userfrontTokens?.accessToken
	);

	return resolve(event);
}