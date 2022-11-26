import promisePool from "$lib/db";
import type { ReviewDB } from "$types/DBStructures";
import { trycatchasync } from "$utils/trycatch";
import { error, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
    const { user, renter, review } = await request.json();

    //* Check if the user cna leave a review
    const [reviewAuthQuery, reviewAuthQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM \`rented_items\` as r WHERE r.fk_renter = ? AND r.fk_rentee = ?`, [renter, user]));
    if (reviewAuthQueryError) {
        throw error(500, reviewAuthQueryError);
    }
    if ((reviewAuthQuery[0] as any).length === 0) {
        throw error(401, "Prieš palikdami atsiliepimą, išsinuomokite kažką!");
    }

    //* Post the review.
    const [_, reviewQueryError] = await trycatchasync(async () => await promisePool.execute(`INSERT INTO \`reviews\` (\`fk_reviewer\`, \`fk_renter\`, \`review\`) VALUES (?, ?, ?)`, [user, renter, review]));
    if (reviewQueryError) {
        throw error(500, reviewQueryError);
    }

    //* Return the response.
    return new Response(undefined, { status: 200 });
}

export const GET: RequestHandler = async ({ url }) => {
    if (url.searchParams.get("user")) {
        //* Fetch all items.
        const [reviewQueryResult, reviewQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM reviews WHERE reviews.fk_renter = ?`, [url.searchParams.get("user")]));
        if (reviewQueryError) {
            throw error(500, reviewQueryError);
        }
        const [reviews] = reviewQueryResult as unknown as [ReviewDB[]];

        //* Return the response.
        return new Response(JSON.stringify({ reviews }), { status: 200 });
    }

    //* Fetch all items.
    const [reviewQueryResult, reviewQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT * FROM reviews`));
    if (reviewQueryError) {
        throw error(500, reviewQueryError);
    }
    const [reviews] = reviewQueryResult as unknown as [ReviewDB[]];

    //* Return the response.
    return new Response(JSON.stringify({ reviews }), { status: 200 });
}

export const DELETE: RequestHandler = async ({ request }) => {
    const { id } = await request.json();

    const [_, deleteQueryError] = await trycatchasync(async () => await promisePool.execute(`DELETE FROM reviews WHERE \`reviews\`.\`id\` = ?`, [id]));
    if (deleteQueryError) {
        throw error(500, deleteQueryError);
    }

    return new Response(undefined, { status: 200 });
}