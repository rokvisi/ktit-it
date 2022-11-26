import promisePool from '$lib/db';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';

export async function load({ parent }: any) {
    type ContractDB = { id: number; name: string; url: string; fk_renter: string; fk_rentee: string, start_time: Date, end_time: Date | null }

    const { username } = await parent();

    const [contractQuery, contractQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT ri.id, i.name, img.url, ri.fk_renter, ri.fk_rentee, ri.start_time, ri.end_time FROM rented_items as ri LEFT JOIN items as i ON ri.fk_item = i.id LEFT JOIN ( SELECT * FROM images AS im GROUP BY im.fk_item ) AS img ON i.id = img.fk_item WHERE ri.fk_rentee = ?`, [username]));
    if (contractQueryError) {
        throw error(500, contractQueryError);
    }
    let [contracts] = contractQuery as unknown as [ContractDB[]];

    return { contracts }
}