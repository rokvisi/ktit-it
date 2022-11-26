import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
import cookie__default from "cookie";
import jwt from "jsonwebtoken";
import { e as env } from "../../../../../chunks/dotenv.js";
import { S as SESSION_COOKIE_OPTIONS } from "../../../../../chunks/const.js";
import { s as sha512 } from "../../../../../chunks/db2.js";
const POST = async ({ request }) => {
  const { username, password } = await request.json();
  const [user] = await promisePool.execute("SELECT * FROM `users` WHERE `name` = ?", [username]);
  if (user.length === 1) {
    throw error(401, "User already exists.");
  }
  const hashedPassword = await sha512(password);
  const [_, insertError] = await trycatchasync(async () => await promisePool.execute("INSERT INTO `users` VALUES (?, ?, ?)", [username, hashedPassword, "user"]));
  if (insertError) {
    throw error(401, insertError);
  }
  const userData = {
    username,
    role: "user"
  };
  const session = jwt.sign(userData, env.SERVER_SECRET);
  return new Response(JSON.stringify(userData), {
    status: 200,
    headers: [
      ["Set-Cookie", cookie__default.serialize("session", session, SESSION_COOKIE_OPTIONS)]
    ]
  });
};
export {
  POST
};
