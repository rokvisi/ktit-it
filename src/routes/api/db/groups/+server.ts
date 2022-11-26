import promisePool from "$lib/db";
import { trycatchasync } from "$utils/trycatch";
import { error, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ request }) => {
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

    //* Return the response.
    return new Response(JSON.stringify({}), { status: 200 });
}

export const POST: RequestHandler = async ({ request }) => {
    const { url, itemId } = await request.json();

    const [_, InsertQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO images VALUES (?, ?)`, [url, itemId]));
    if (InsertQueryError) {
        throw error(500, InsertQueryError);
    }

    //* Return the response.
    return new Response(JSON.stringify({}), { status: 200 });
}