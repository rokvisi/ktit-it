import promisePool from '$lib/db';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';
import type { Item, RentRequest } from '$types/DBStructures';
import _ from "underscore";

export function toFixedPrecision(num: number, precision: number): number {
    return Number.parseFloat(num.toFixed(precision))
}

export async function sha512(str: string) {
    return crypto.subtle.digest("SHA-512", new TextEncoder().encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
    });
}

export async function getDBItemsForUser(user: string): Promise<Item[]> {
    type ItemsQueryResult = { id: number; name: string; description: string; price: number, pk_user: string }
    type ImageQueryResult = { itemName: string; url: string; }
    type GroupQueryResult = { itemName: string; grp: string; }

    //* Get the items.
    const [itemsQueryResult, itemsQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM items as i WHERE pk_user = ?`, [user]));
    if (itemsQueryError) {
        throw error(500, itemsQueryError);
    }
    const [items] = itemsQueryResult as unknown as [ItemsQueryResult[]];

    //* Get the images.
    const [imageQueryResult, imageQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT img.url, i.name as itemName FROM images as img INNER JOIN items as i ON i.id = img.fk_item WHERE i.pk_user = ? GROUP BY img.url`, [user]));
    if (imageQueryError) {
        throw error(500, imageQueryError);
    }
    const [images] = imageQueryResult as unknown as [ImageQueryResult[]];
    const parsedImages = Object.entries(_.groupBy(images, 'itemName')).map(([key, value]) => ({ itemName: key, images: value.map(group => group.url) }));;

    //* Get the groups.
    const [groupQueryResult, groupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT grp.fk_group as grp, i.name as itemName FROM item_groups as grp LEFT JOIN items as i ON grp.fk_item = i.id WHERE i.pk_user = ?`, [user]));
    if (groupQueryError) {
        throw error(500, groupQueryError);
    }
    const [groups] = groupQueryResult as unknown as [GroupQueryResult[]];
    const parsedGroups = Object.entries(_.groupBy(groups, 'itemName')).map(([key, value]) => ({ itemName: key, groups: value.map(group => group.grp) }));

    //* Concat the results
    return items.map((item) => {
        return {
            ...item,
            renter: item.pk_user,
            price: toFixedPrecision(item.price, 2),
            images: parsedImages.find(image => image.itemName === item.name)?.images ?? [],
            groups: parsedGroups.find(group => group.itemName === item.name)?.groups ?? [],
        };
    })
}

export async function getDBRentRequestsForUser(user: string): Promise<RentRequest[]> {
    type RequestQueryResult = { id: number, status: string; fk_renter: string; fk_rentee: string; name: string; itemId: number; time: Date; url: string }

    //* Get the requests.
    const [requestsQueryResult, requestsQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT r.id,  r.status, r.fk_renter, r.fk_rentee, i.name, i.id as itemId, r.time, img.url FROM rent_requests AS r LEFT JOIN items AS i ON r.fk_item = i.id LEFT JOIN ( SELECT * FROM images AS im GROUP BY im.fk_item ) AS img ON i.id = img.fk_item WHERE r.fk_renter = ?`, [user]));
    if (requestsQueryError) {
        throw error(500, requestsQueryError);
    }
    const [requests] = requestsQueryResult as unknown as [RequestQueryResult[]];

    return requests.map((request) => {
        return {
            id: request.id,
            status: request.status,
            renter: request.fk_renter,
            rentee: request.fk_rentee,
            itemName: request.name,
            itemId: request.itemId,
            time: request.time,
            image_url: request.url,
        };
    })
}


