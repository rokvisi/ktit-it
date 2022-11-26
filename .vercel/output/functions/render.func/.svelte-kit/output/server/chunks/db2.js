import { p as promisePool } from "./db.js";
import { t as trycatchasync } from "./trycatch.js";
import { e as error } from "./index2.js";
import _ from "underscore";
function toFixedPrecision(num, precision) {
  return Number.parseFloat(num.toFixed(precision));
}
async function sha512(str) {
  return crypto.subtle.digest("SHA-512", new TextEncoder().encode(str)).then((buf) => {
    return Array.prototype.map.call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2)).join("");
  });
}
async function getDBItemsForUser(user) {
  const [itemsQueryResult, itemsQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM items as i WHERE pk_user = ?`, [user]));
  if (itemsQueryError) {
    throw error(500, itemsQueryError);
  }
  const [items] = itemsQueryResult;
  const [imageQueryResult, imageQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT img.url, i.name as itemName FROM images as img INNER JOIN items as i ON i.id = img.fk_item WHERE i.pk_user = ? GROUP BY img.url`, [user]));
  if (imageQueryError) {
    throw error(500, imageQueryError);
  }
  const [images] = imageQueryResult;
  const parsedImages = Object.entries(_.groupBy(images, "itemName")).map(([key, value]) => ({ itemName: key, images: value.map((group) => group.url) }));
  const [groupQueryResult, groupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT grp.fk_group as grp, i.name as itemName FROM item_groups as grp LEFT JOIN items as i ON grp.fk_item = i.id WHERE i.pk_user = ?`, [user]));
  if (groupQueryError) {
    throw error(500, groupQueryError);
  }
  const [groups] = groupQueryResult;
  const parsedGroups = Object.entries(_.groupBy(groups, "itemName")).map(([key, value]) => ({ itemName: key, groups: value.map((group) => group.grp) }));
  return items.map((item) => {
    var _a, _b;
    return {
      ...item,
      renter: item.pk_user,
      price: toFixedPrecision(item.price, 2),
      images: ((_a = parsedImages.find((image) => image.itemName === item.name)) == null ? void 0 : _a.images) ?? [],
      groups: ((_b = parsedGroups.find((group) => group.itemName === item.name)) == null ? void 0 : _b.groups) ?? []
    };
  });
}
async function getDBRentRequestsForUser(user) {
  const [requestsQueryResult, requestsQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT r.id,  r.status, r.fk_renter, r.fk_rentee, i.name, i.id as itemId, r.time, img.url FROM rent_requests AS r LEFT JOIN items AS i ON r.fk_item = i.id LEFT JOIN ( SELECT * FROM images AS im GROUP BY im.fk_item ) AS img ON i.id = img.fk_item WHERE r.fk_renter = ?`, [user]));
  if (requestsQueryError) {
    throw error(500, requestsQueryError);
  }
  const [requests] = requestsQueryResult;
  return requests.map((request) => {
    return {
      id: request.id,
      status: request.status,
      renter: request.fk_renter,
      rentee: request.fk_rentee,
      itemName: request.name,
      itemId: request.itemId,
      time: request.time,
      image_url: request.url
    };
  });
}
export {
  getDBRentRequestsForUser as a,
  getDBItemsForUser as g,
  sha512 as s
};
