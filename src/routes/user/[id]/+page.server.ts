import promisePool from '$lib/db';
import type { ImageDB, ItemDB, ItemGroupDB } from '$types/DBStructures';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';

export async function load({ params }: any) {
    const [itemQueryResult, itemQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`items\` WHERE items.id = ?`, [params.id]));
    if (itemQueryError) {
        throw error(500, itemQueryError);
    }
    let [items] = itemQueryResult as unknown as [ItemDB[]];
    const item = items[0];

    const [imageQueryResult, imageQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`images\` WHERE images.fk_item = ?`, [params.id]));
    if (imageQueryError) {
        throw error(500, imageQueryError);
    }
    let [images] = imageQueryResult as unknown as [ImageDB[]];


    const [groupQueryResult, groupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`item_groups\` WHERE item_groups.fk_item = ?`, [params.id]));
    if (groupQueryError) {
        throw error(500, groupQueryError);
    }
    let [groups] = groupQueryResult as unknown as [ItemGroupDB[]];

    return {
        ...item,
        renter: item.pk_user,
        price: item.price.toFixed(2),
        images: images.map(image => image.url),
        groups: groups.map(group => group.fk_group),
    }
}