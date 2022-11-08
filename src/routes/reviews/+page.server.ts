import promisePool from '$lib/db';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';

export async function load() {
    const [usersQueryResult, usersQueryError] = await trycatchasync(async () => await promisePool.execute(`SELECT u.name, u.role, r.fk_renter, r.review FROM \`users\` as u INNER JOIN \`reviews\` as r ON r.fk_reviewer = u.name`));
    if (usersQueryError) {
        throw error(500, usersQueryError);
    }
    let [queryResultArr] = usersQueryResult as unknown as [any[]];

    let usersWithReviews = [];
    for (const userWithReviews of queryResultArr) {
        const uniqueReviewIndex = usersWithReviews.findIndex(uniqueReview => uniqueReview.name === userWithReviews.name)
        if (uniqueReviewIndex === -1) {
            usersWithReviews.push({
                name: userWithReviews.name,
                role: userWithReviews.role,
                reviews: [{ text: userWithReviews.review, renter: userWithReviews.fk_renter }]
            })
        }
        else {
            usersWithReviews[uniqueReviewIndex].reviews.push({ text: userWithReviews.review, renter: userWithReviews.fk_renter });
        }
    }

    return {
        usersWithReviews
    }
}