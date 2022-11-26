import promisePool from "$lib/db";
import { trycatchasync } from "$utils/trycatch";
import { type RequestHandler, error } from "@sveltejs/kit";

export const PUT: RequestHandler = async ({ request }) => {
    const { contractId } = await request.json();

    //* Update item.
    const [_, queryError] = await trycatchasync(async () => await promisePool.execute(`UPDATE rented_items SET end_time = NOW() WHERE rented_items.id = ?`, [contractId]));
    if (queryError) {
        throw error(500, queryError);
    }

    return new Response(undefined, { status: 200 });
}