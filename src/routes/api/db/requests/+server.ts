import promisePool from "$lib/db";
import { trycatchasync } from "$utils/trycatch";
import { type RequestHandler, error } from "@sveltejs/kit";

export const PUT: RequestHandler = async ({ request }) => {
    const { requestId, action, itemId, renter, rentee } = await request.json();
    const newStatus = action === "accept" ? "accepted" : "refused";

    const [_, updateError] = await trycatchasync(async () => await promisePool.execute("UPDATE rent_requests SET status = ? WHERE rent_requests.id = ?", [newStatus, requestId]));
    if (updateError) {
        throw error(500, updateError);
    }

    //TODO: If the rent request is accepted, create the rent contract (rented_items table).
    //? Required fields: fk_item, fk_renter, fk_rentee

    if (newStatus === "accepted") {
        const [_, insertError] = await trycatchasync(async () => await promisePool.execute("INSERT INTO rented_items (fk_item, fk_renter, fk_rentee) VALUES (?, ?, ?)", [itemId, renter, rentee]));
        if (insertError) {
            throw error(500, insertError);
        }
    }

    //* Return the response.
    return new Response(undefined, { status: 200 });
}

export const POST: RequestHandler = async ({ request }) => {
    const { renter, rentee, itemId } = await request.json();

    //* Check if:
    //* 1. User has already submitted rent request.
    const [reqCheckQuery, reqCheckError] = await trycatchasync(async () => await promisePool.execute("SELECT * FROM rent_requests as rr WHERE rr.fk_item = ? AND rr.status = 'pending' AND rr.fk_rentee = ?", [itemId, rentee]));
    if (reqCheckError) {
        throw error(500, reqCheckError);
    }
    let [reqQueryResult] = reqCheckQuery as unknown as [any[]];
    if (reqQueryResult.length !== 0) {
        throw error(500, "Užklausa jau išsiųsta!");
    }

    //* 2. Item is already rented.
    const [rentCheckQuery, rentCheckError] = await trycatchasync(async () => await promisePool.execute("SELECT * FROM rented_items as ri WHERE ri.fk_item = ? AND ri.end_time is NULL", [itemId]));
    if (rentCheckError) {
        throw error(500, rentCheckError);
    }
    let [rentQueryResult] = rentCheckQuery as unknown as [any[]];
    if (rentQueryResult.length !== 0) {
        throw error(500, "Daiktas šiuo metu jau išnuomotas!");
    }

    const [_, insertError] = await trycatchasync(async () => await promisePool.execute("INSERT INTO rent_requests (fk_renter, fk_rentee, fk_item) VALUES (?, ?, ?)", [renter, rentee, itemId]));
    if (insertError) {
        throw error(500, insertError);
    }

    //* Return the response.
    return new Response(undefined, { status: 200 });
}