import promisePool from "$lib/db";
import { trycatchasync } from "$utils/trycatch";
import { error, type RequestHandler } from "@sveltejs/kit";
import type { ImageDB, ItemDB, ItemGroupDB } from "$types/DBStructures";

export const GET: RequestHandler = async () => {
    //* Fetch all items.
    const [itemsQueryResult, itemsQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`items\``));
    if (itemsQueryError) {
        throw error(500, itemsQueryError);
    }
    let [items] = itemsQueryResult as unknown as [ItemDB[]];

    //* Fetch all images.
    const [imagesQueryResylt, imagesQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`images\``));
    if (imagesQueryError) {
        throw error(500, imagesQueryError);
    }
    let [images] = imagesQueryResylt as unknown as [ImageDB[]];

    //* Fetch all item groups.
    const [itemGroupQueryResylt, itemGroupitemGroupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`item_groups\``));
    if (itemGroupitemGroupQueryError) {
        throw error(500, itemGroupitemGroupQueryError);
    }
    let [itemGroups] = itemGroupQueryResylt as unknown as [ItemGroupDB[]];

    //* Push all items to the final array.
    const parsedItems = items.map((item) => ({
        ...item,
        price: item.price.toFixed(2),
        renter: item.pk_user,
        fk_user: undefined,
        groups: [] as string[],
        images: [] as string[]
    }));

    //* Combine all properties into the final array.
    for (let item of parsedItems) {
        //* Join all images
        for (const image of images) {
            if (image.fk_item === item.id) {
                item.images.push(image.url);
            }
        }

        //* Join all groups
        for (const group of itemGroups) {
            if (group.fk_item === item.id) {
                item.groups.push(group.fk_group);
            }
        }
    }

    //* Return the response.
    return new Response(JSON.stringify(parsedItems), { status: 200 });
}

export const PUT: RequestHandler = async ({ request }) => {
    const { item_id, name, description, price } = await request.json();

    //* Update item.
    const [_, queryError] = await trycatchasync(async () => await promisePool.execute(`UPDATE items SET name = ?, description = ?, price = ? WHERE items.id = ?`, [name, description, price, item_id]));
    if (queryError) {
        throw error(500, queryError);
    }

    return new Response(undefined, { status: 200 });
}