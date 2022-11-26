import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
const POST = async ({ request }) => {
  const { user, renter, review } = await request.json();
  const [reviewAuthQuery, reviewAuthQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`rented_items\` as r WHERE r.fk_renter = ? AND r.fk_rentee = ?`, [renter, user]));
  if (reviewAuthQueryError) {
    throw error(500, reviewAuthQueryError);
  }
  if (reviewAuthQuery[0].length === 0) {
    throw error(401, "Prie\u0161 palikdami atsiliepim\u0105, i\u0161sinuomokite ka\u017Ek\u0105!");
  }
  const [_, reviewQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO \`reviews\` (\`fk_reviewer\`, \`fk_renter\`, \`review\`) VALUES (?, ?, ?)`, [user, renter, review]));
  if (reviewQueryError) {
    throw error(500, reviewQueryError);
  }
  return new Response(void 0, { status: 200 });
};
const GET = async ({ url }) => {
  if (url.searchParams.get("user")) {
    const [reviewQueryResult2, reviewQueryError2] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM reviews WHERE reviews.fk_renter = ?`, [url.searchParams.get("user")]));
    if (reviewQueryError2) {
      throw error(500, reviewQueryError2);
    }
    const [reviews2] = reviewQueryResult2;
    return new Response(JSON.stringify({ reviews: reviews2 }), { status: 200 });
  }
  const [reviewQueryResult, reviewQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM reviews`));
  if (reviewQueryError) {
    throw error(500, reviewQueryError);
  }
  const [reviews] = reviewQueryResult;
  return new Response(JSON.stringify({ reviews }), { status: 200 });
};
const DELETE = async ({ request }) => {
  const { id } = await request.json();
  const [_, deleteQueryError] = await trycatchasync(async () => await promisePool.execute(`DELETE FROM reviews WHERE \`reviews\`.\`id\` = ?`, [id]));
  if (deleteQueryError) {
    throw error(500, deleteQueryError);
  }
  return new Response(void 0, { status: 200 });
};
export {
  DELETE,
  GET,
  POST
};
