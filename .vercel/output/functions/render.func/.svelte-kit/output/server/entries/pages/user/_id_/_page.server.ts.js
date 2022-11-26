import { p as promisePool } from "../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../chunks/trycatch.js";
import { e as error } from "../../../../chunks/index2.js";
async function load({ params }) {
  const [itemQueryResult, itemQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`items\` WHERE items.id = ?`, [params.id]));
  if (itemQueryError) {
    throw error(500, itemQueryError);
  }
  let [items] = itemQueryResult;
  const item = items[0];
  const [imageQueryResult, imageQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`images\` WHERE images.fk_item = ?`, [params.id]));
  if (imageQueryError) {
    throw error(500, imageQueryError);
  }
  let [images] = imageQueryResult;
  const [groupQueryResult, groupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`item_groups\` WHERE item_groups.fk_item = ?`, [params.id]));
  if (groupQueryError) {
    throw error(500, groupQueryError);
  }
  let [groups] = groupQueryResult;
  return {
    ...item,
    renter: item.pk_user,
    price: item.price.toFixed(2),
    images: images.map((image) => image.url),
    groups: groups.map((group) => group.fk_group)
  };
}
export {
  load
};
