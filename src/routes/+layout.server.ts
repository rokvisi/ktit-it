import env from "$lib/dotenv";
import { trycatch } from "$utils/trycatch";
import type { LayoutServerLoad } from ".svelte-kit/types/src/routes/$types";
import { redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import type { PageData } from '.svelte-kit/types/src/routes/$types';

const REDIRECT_URL = "/";

function guardProtectedRoutes(url: URL, claims: PageData | undefined) {
    //* A valid user session exists. Check for the correct permissions.
    if (url.pathname.startsWith("/user") && (!claims || claims.role !== "user")) {
        console.log("[DEBUG]: No user rights.")
        throw redirect(302, REDIRECT_URL);
    }
    if (url.pathname.startsWith("/mod") && (!claims || claims.role !== "mod")) {
        console.log("[DEBUG]: No mod rights.")
        throw redirect(302, REDIRECT_URL);
    }
    if (url.pathname.startsWith("/renter") && (!claims || claims.role !== "renter")) {
        console.log("[DEBUG]: No renter rights.")
        throw redirect(302, REDIRECT_URL);
    }
}

export const load: LayoutServerLoad = async ({ url, cookies, request }) => {
    //* Check if we are accessing a protected page and that we have a valid session.
    const [claims, claimsError] = trycatch(() => jwt.verify(cookies.get("session")!, env.SERVER_SECRET as string));
    guardProtectedRoutes(url, claims as any);

    if (claimsError) {
        return {
            username: null,
            role: null,
        }
    }

    return {
        username: (claims as any).username,
        role: (claims as any).role,
    }
};