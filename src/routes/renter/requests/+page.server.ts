import promisePool from '$lib/db';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';
import type { ServerLoad } from "@sveltejs/kit";
import type { ItemDB } from '$types/DBStructures';
import { getDBItemsForUser, getDBRentRequestsForUser } from '$utils/db';


export const load: ServerLoad = async ({ parent }) => {
    const userData = await parent();

    const [requests, requestsError] = await trycatchasync(async () => await getDBRentRequestsForUser(userData.username));
    if (requestsError) {
        throw error(500, requestsError);
    }

    return {
        requests
    }
}