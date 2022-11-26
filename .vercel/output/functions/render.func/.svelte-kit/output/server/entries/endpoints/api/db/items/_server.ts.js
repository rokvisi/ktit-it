import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
const GET = async () => {
  const [itemsQueryResult, itemsQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`items\``));
  if (itemsQueryError) {
    throw error(500, itemsQueryError);
  }
  let [items] = itemsQueryResult;
  const [imagesQueryResylt, imagesQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`images\``));
  if (imagesQueryError) {
    throw error(500, imagesQueryError);
  }
  let [images] = imagesQueryResylt;
  const [itemGroupQueryResylt, itemGroupitemGroupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`item_groups\``));
  if (itemGroupitemGroupQueryError) {
    throw error(500, itemGroupitemGroupQueryError);
  }
  let [itemGroups] = itemGroupQueryResylt;
  const parsedItems = items.map((item) => ({
    ...item,
    price: item.price.toFixed(2),
    renter: item.pk_user,
    fk_user: void 0,
    groups: [],
    images: []
  }));
  for (let item of parsedItems) {
    for (const image of images) {
      if (image.fk_item === item.id) {
        item.images.push(image.url);
      }
    }
    for (const group of itemGroups) {
      if (group.fk_item === item.id) {
        item.groups.push(group.fk_group);
      }
    }
  }
  return new Response(JSON.stringify(parsedItems), { status: 200 });
};
const PUT = async ({ request }) => {
  const { item_id, name, description, price } = await request.json();
  const [_, queryError] = await trycatchasync(async () => await promisePool.execute(`UPDATE items SET name = ?, description = ?, price = ? WHERE items.id = ?`, [name, description, price, item_id]));
  if (queryError) {
    throw error(500, queryError);
  }
  return new Response(void 0, { status: 200 });
};
export {
  GET,
  PUT
};
