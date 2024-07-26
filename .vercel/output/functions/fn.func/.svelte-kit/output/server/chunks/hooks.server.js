import { c as PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, b as PUBLIC_USERFRONT_ACCOUNT_ID } from "./public.js";
import "@userfront/toolkit";
import * as jose from "jose";
function getCookies(cookieString) {
  if (!cookieString) {
    return {};
  }
  return cookieString.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {});
}
async function verifyToken(publicKeyBase64, token) {
  if (!token) {
    return null;
  }
  const userfrontPublicKey = atob(publicKeyBase64);
  const publicKey = await jose.importSPKI(userfrontPublicKey, "RS256");
  try {
    const { payload } = await jose.jwtVerify(token, publicKey, {
      algorithms: ["RS256"]
    });
    return payload;
  } catch (error) {
    console.error(error);
  }
  return null;
}
async function userfrontCookieToTokens(cookieString, tenantId) {
  if (!cookieString) {
    return null;
  }
  const accessTokenName = `access.${tenantId}`;
  const idTokenName = `id.${tenantId}`;
  const refreshTokenName = `refresh.${tenantId}`;
  const cookies = getCookies(cookieString);
  const accessToken = cookies[accessTokenName];
  const idToken = cookies[idTokenName];
  const refreshToken = cookies[refreshTokenName];
  return {
    accessTokenName,
    idTokenName,
    refreshTokenName,
    accessToken,
    idToken,
    refreshToken
  };
}
async function handle({ event, resolve }) {
  const cookie = event.request.headers.get("cookie");
  const userfrontTokens = await userfrontCookieToTokens(cookie, PUBLIC_USERFRONT_ACCOUNT_ID);
  event.locals.auth = await verifyToken(
    PUBLIC_USERFRONT_PUBLIC_KEY_BASE64,
    userfrontTokens?.accessToken
  );
  return resolve(event);
}
export {
  handle
};
