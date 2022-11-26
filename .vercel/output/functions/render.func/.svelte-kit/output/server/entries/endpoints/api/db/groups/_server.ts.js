import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
const DELETE = async ({ request }) => {
  const { itemId, addedGroups, removedGroups } = await request.json();
  for (const addedGroup of addedGroups) {
    const [_, groupAddQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO item_groups VALUES (?, ?)`, [itemId, addedGroup]));
    if (groupAddQueryError) {
      throw error(500, groupAddQueryError.message);
    }
  }
  for (const removedGroup of removedGroups) {
    const [_, groupRemoveQueryError] = await trycatchasync(async () => await promisePool.execute(`DELETE FROM item_groups WHERE item_groups.fk_item = ? AND item_groups.fk_group = ?`, [itemId, removedGroup]));
    if (groupRemoveQueryError) {
      throw error(500, groupRemoveQueryError.message);
    }
  }
  return new Response(JSON.stringify({}), { status: 200 });
};
const POST = async ({ request }) => {
  const { url, itemId } = await request.json();
  const [_, InsertQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO images VALUES (?, ?)`, [url, itemId]));
  if (InsertQueryError) {
    throw error(500, InsertQueryError);
  }
  return new Response(JSON.stringify({}), { status: 200 });
};
export {
  DELETE,
  POST
};
