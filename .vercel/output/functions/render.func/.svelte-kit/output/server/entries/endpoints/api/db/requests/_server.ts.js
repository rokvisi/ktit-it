import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
const PUT = async ({ request }) => {
  const { requestId, action, itemId, renter, rentee } = await request.json();
  const newStatus = action === "accept" ? "accepted" : "refused";
  const [_, updateError] = await trycatchasync(async () => await promisePool.execute("UPDATE rent_requests SET status = ? WHERE rent_requests.id = ?", [newStatus, requestId]));
  if (updateError) {
    throw error(500, updateError);
  }
  if (newStatus === "accepted") {
    const [_2, insertError] = await trycatchasync(async () => await promisePool.execute("INSERT INTO rented_items (fk_item, fk_renter, fk_rentee) VALUES (?, ?, ?)", [itemId, renter, rentee]));
    if (insertError) {
      throw error(500, insertError);
    }
  }
  return new Response(void 0, { status: 200 });
};
const POST = async ({ request }) => {
  const { renter, rentee, itemId } = await request.json();
  const [reqCheckQuery, reqCheckError] = await trycatchasync(async () => await promisePool.execute("SELECT * FROM rent_requests as rr WHERE rr.fk_item = ? AND rr.status = 'pending' AND rr.fk_rentee = ?", [itemId, rentee]));
  if (reqCheckError) {
    throw error(500, reqCheckError);
  }
  let [reqQueryResult] = reqCheckQuery;
  if (reqQueryResult.length !== 0) {
    throw error(500, "U\u017Eklausa jau i\u0161si\u0173sta!");
  }
  const [rentCheckQuery, rentCheckError] = await trycatchasync(async () => await promisePool.execute("SELECT * FROM rented_items as ri WHERE ri.fk_item = ? AND ri.end_time is NULL", [itemId]));
  if (rentCheckError) {
    throw error(500, rentCheckError);
  }
  let [rentQueryResult] = rentCheckQuery;
  if (rentQueryResult.length !== 0) {
    throw error(500, "Daiktas \u0161iuo metu jau i\u0161nuomotas!");
  }
  const [_, insertError] = await trycatchasync(async () => await promisePool.execute("INSERT INTO rent_requests (fk_renter, fk_rentee, fk_item) VALUES (?, ?, ?)", [renter, rentee, itemId]));
  if (insertError) {
    throw error(500, insertError);
  }
  return new Response(void 0, { status: 200 });
};
export {
  POST,
  PUT
};
