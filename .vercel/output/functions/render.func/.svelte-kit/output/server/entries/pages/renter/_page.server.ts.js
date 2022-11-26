import { p as promisePool } from "../../../chunks/db.js";
import { t as trycatchasync } from "../../../chunks/trycatch.js";
import { e as error } from "../../../chunks/index2.js";
import { g as getDBItemsForUser } from "../../../chunks/db2.js";
const load = async ({ params, locals, parent, cookies }) => {
  const userData = await parent();
  const [items, itemsError] = await trycatchasync(async () => await getDBItemsForUser(userData.username));
  if (itemsError) {
    throw error(500, itemsError);
  }
  const [groupQueryResult, groupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM groups`));
  if (groupQueryError) {
    throw error(500, groupQueryError);
  }
  const [groups] = groupQueryResult;
  return {
    items,
    groups: groups.map((o) => o.title)
  };
};
export {
  load
};
