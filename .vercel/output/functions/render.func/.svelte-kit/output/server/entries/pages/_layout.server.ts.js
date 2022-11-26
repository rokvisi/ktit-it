import { e as env } from "../../chunks/dotenv.js";
import { a as trycatch } from "../../chunks/trycatch.js";
import { r as redirect } from "../../chunks/index2.js";
import jwt from "jsonwebtoken";
const REDIRECT_URL = "/";
function guardProtectedRoutes(url, claims) {
  if (url.pathname.startsWith("/user") && (!claims || claims.role !== "user")) {
    console.log("[DEBUG]: No user rights.");
    throw redirect(302, REDIRECT_URL);
  }
  if (url.pathname.startsWith("/mod") && (!claims || claims.role !== "mod")) {
    console.log("[DEBUG]: No mod rights.");
    throw redirect(302, REDIRECT_URL);
  }
  if (url.pathname.startsWith("/renter") && (!claims || claims.role !== "renter")) {
    console.log("[DEBUG]: No renter rights.");
    throw redirect(302, REDIRECT_URL);
  }
}
const load = async ({ url, cookies, request }) => {
  const [claims, claimsError] = trycatch(() => jwt.verify(cookies.get("session"), env.SERVER_SECRET));
  guardProtectedRoutes(url, claims);
  if (claimsError) {
    return {
      username: null,
      role: null
    };
  }
  return {
    username: claims.username,
    role: claims.role
  };
};
export {
  load
};
