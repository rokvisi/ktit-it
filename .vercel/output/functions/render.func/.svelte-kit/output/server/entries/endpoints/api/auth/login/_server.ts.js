import { e as error } from "../../../../../chunks/index2.js";
import cookie__default from "cookie";
import { p as promisePool } from "../../../../../chunks/db.js";
import jwt from "jsonwebtoken";
import { e as env } from "../../../../../chunks/dotenv.js";
import { S as SESSION_COOKIE_OPTIONS } from "../../../../../chunks/const.js";
import { s as sha512 } from "../../../../../chunks/db2.js";
const POST = async ({ request }) => {
  const { username, password } = await request.json();
  const hashedPassword = await sha512(password);
  const [user] = await promisePool.execute("SELECT * FROM `users` WHERE `name` = ? AND `password` = ?", [username, hashedPassword]);
  if (user.length === 0) {
    throw error(401, "Incorrect username or password.");
  }
  const userData = user[0];
  const strippedUserData = { ...userData, password: void 0 };
  const session = jwt.sign({
    username,
    role: userData.role
  }, env.SERVER_SECRET);
  return new Response(JSON.stringify(strippedUserData), {
    status: 200,
    headers: [
      ["Set-Cookie", cookie__default.serialize("session", session, SESSION_COOKIE_OPTIONS)]
    ]
  });
};
const DELETE = () => {
  return new Response(void 0, {
    status: 200,
    headers: [
      ["Set-Cookie", cookie__default.serialize("session", "", { ...SESSION_COOKIE_OPTIONS, maxAge: 0 })]
    ]
  });
};
export {
  DELETE,
  POST
};
