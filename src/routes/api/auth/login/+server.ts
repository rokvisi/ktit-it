import { error, type RequestHandler } from "@sveltejs/kit";
import cookie from "cookie";
import promisePool from "$lib/db";
import jwt from "jsonwebtoken";
import env from "$lib/dotenv";
import { SESSION_COOKIE_OPTIONS } from "$lib/const";
import { sha512 } from "$utils/db";

export const POST: RequestHandler = async ({ request }) => {
    //* GET CREDENTIALS FROM REQUEST
    const { username, password } = await request.json();

    //* HASH PASSWORD
    const hashedPassword = await sha512(password);

    //* VALIDATE CREDENTIALS
    const [user] = await promisePool.execute("SELECT * FROM `users` WHERE `name` = ? AND `password` = ?", [username, hashedPassword]);

    //* CHECK RESULT
    if ((user as []).length === 0) {
        throw error(401, "Incorrect username or password.");
    }

    //* STRIP PASSWORD FROM RESULT
    const userData = (user as [any])[0];
    const strippedUserData = { ...userData, password: undefined };

    //* CREATE A SESSION COOKIE
    const session = jwt.sign({
        username,
        role: userData.role
    }, env.SERVER_SECRET as string);

    //* RETURN THE SESSION COOKIE
    return new Response(JSON.stringify(strippedUserData), {
        status: 200,
        headers: [
            ["Set-Cookie", cookie.serialize("session", session, SESSION_COOKIE_OPTIONS)]
        ]
    })
}

//* Deletes the user session cookie.
export const DELETE: RequestHandler = () => {
    return new Response(undefined, {
        status: 200,
        headers: [
            ["Set-Cookie", cookie.serialize("session", "", { ...SESSION_COOKIE_OPTIONS, maxAge: 0 })]
        ]
    })
}