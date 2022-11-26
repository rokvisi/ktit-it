import { p as promisePool } from "../../../../../chunks/db.js";
import { t as trycatchasync } from "../../../../../chunks/trycatch.js";
import { e as error } from "../../../../../chunks/index2.js";
const DELETE = async ({ request }) => {
  const { url } = await request.json();
  const [_, deleteQueryError] = await trycatchasync(async () => await promisePool.execute(`DELETE FROM images WHERE images.url = ?`, [url]));
  if (deleteQueryError) {
    throw error(500, deleteQueryError);
  }
  return new Response(JSON.stringify({}), { status: 200 });
};
const GET = async () => {
  const [imageQueryResult, imageQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT img.url, img.fk_item, i.name, i.pk_user FROM images as img LEFT JOIN items as i ON img.fk_item = i.id`));
  if (imageQueryError) {
    throw error(500, imageQueryError);
  }
  let [images] = imageQueryResult;
  return new Response(JSON.stringify({
    images
  }), { status: 200 });
};
const POST = async ({ request }) => {
  const { url, itemId } = await request.json();
  const [_, insertQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO images VALUES (?, ?)`, [url, itemId]));
  if (insertQueryError) {
    throw error(500, insertQueryError.sqlMessage);
  }
  return new Response(JSON.stringify({}), { status: 200 });
};
export {
  DELETE,
  GET,
  POST
};
