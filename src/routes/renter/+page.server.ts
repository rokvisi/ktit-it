import promisePool from '$lib/db';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';
import type { ServerLoad } from "@sveltejs/kit";
import type { ItemDB } from '$types/DBStructures';
import { getDBItemsForUser } from '$utils/db';

export const load: ServerLoad = async ({ params, locals, parent, cookies }) => {
    const userData = await parent();

    const [items, itemsError] = await trycatchasync(async () => await getDBItemsForUser(userData.username));
    if (itemsError) {
        throw error(500, itemsError);
    }

    //* Get ALL groups.
    const [groupQueryResult, groupQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM groups`));
    if (groupQueryError) {
        throw error(500, groupQueryError);
    }
    const [groups] = groupQueryResult as unknown as any[];

    return {
        items,
        groups: groups.map((o: any) => o.title)
    }
}