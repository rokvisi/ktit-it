const SESSION_COOKIE_OPTIONS = {
  sameSite: "strict",
  path: "/",
  httpOnly: true,
  secure: true,
  maxAge: 60 * 60 * 24 * 7
};
export {
  SESSION_COOKIE_OPTIONS as S
};
