import type { CookieSerializeOptions } from "cookie";

export const SESSION_COOKIE_OPTIONS: CookieSerializeOptions = {
    sameSite: "strict",
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7 //? One week in seconds. Cookies use seconds.
};