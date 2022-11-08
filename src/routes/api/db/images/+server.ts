import promisePool from "$lib/db";
import { trycatchasync } from "$utils/trycatch";
import { error, type RequestHandler } from "@sveltejs/kit";
import type { ImageDB, ItemDB, ItemGroupDB, ReviewDB } from "$types/DBStructures";

export const DELETE: RequestHandler = async ({ request }) => {
    const { url } = await request.json();

    const [_, deleteQueryError] = await trycatchasync(async () => await promisePool.execute(`DELETE FROM images WHERE \`images\`.\`url\` = ?`, [url]));
    if (deleteQueryError) {
        throw error(500, deleteQueryError);
    }

    //* Return the response.
    return new Response(JSON.stringify({}), { status: 200 });
}

export const GET: RequestHandler = async () => {
    const [imageQueryResult, imageQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`images\``));
    if (imageQueryError) {
        throw error(500, imageQueryError);
    }
    let [images] = imageQueryResult as unknown as [ImageDB[]];

    //* Return the response.
    return new Response(JSON.stringify({
        images,
    }), { status: 200 });
}

export const POST: RequestHandler = async ({ request }) => {
    const { url, itemId } = await request.json();

    const [_, insertQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO images VALUES (?, ?)`, [url, itemId]));
    if (insertQueryError) {
        throw error(500, (insertQueryError as unknown as any).sqlMessage);
    }

    //* Return the response.
    return new Response(JSON.stringify({}), { status: 200 });
}