import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
const PUT = async ({ request }) => {
  const { contractId } = await request.json();
  const [_, queryError] = await trycatchasync(async () => await promisePool.execute(`UPDATE rented_items SET end_time = NOW() WHERE rented_items.id = ?`, [contractId]));
  if (queryError) {
    throw error(500, queryError);
  }
  return new Response(void 0, { status: 200 });
};
export {
  PUT
};
