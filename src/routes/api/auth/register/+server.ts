import promisePool from "$lib/db";
import { trycatchasync } from "$utils/trycatch";
import { error, type RequestHandler } from "@sveltejs/kit";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import env from "$lib/dotenv";
import { SESSION_COOKIE_OPTIONS } from "$lib/const";
import { sha512 } from "$utils/db";

export const POST: RequestHandler = async ({ request }) => {
    //* GET CREDENTIALS FROM REQUEST.
    const { username, password } = await request.json();

    //* CHECK IF ACCOUNT IS ALREADY CREATED.
    const [user] = await promisePool.execute("SELECT * FROM `users` WHERE `name` = ?", [username]);

    //* CHECK RESULT
    if ((user as any).length === 1) {
        throw error(401, "User already exists.");
    }

    //* HASH PASSWORD
    const hashedPassword = await sha512(password);

    //* CREATE THE USER
    const [_, insertError] = await trycatchasync(async () => await promisePool.execute("INSERT INTO `users` VALUES (?, ?, ?)", [username, hashedPassword, "user"]));
    if (insertError) {
        throw error(401, insertError);
    }

    const userData = {
        username,
        role: "user"
    };

    //* CREATE A SESSION COOKIE
    const session = jwt.sign(userData, env.SERVER_SECRET as string);

    //* RETURN THE SESSION COOKIE
    return new Response(JSON.stringify(userData), {
        status: 200,
        headers: [
            ["Set-Cookie", cookie.serialize("session", session, SESSION_COOKIE_OPTIONS)]
        ]
    })
}