import promisePool from '$lib/db';
import { trycatchasync } from '$utils/trycatch';
import { error } from '@sveltejs/kit';
import type { ServerLoad } from "@sveltejs/kit";
import { eachMonthOfInterval, getMonth, getYear } from 'date-fns';
import _ from 'underscore';

export const load: ServerLoad = async ({ parent }) => {
    type RentAnalyticsDB = { name: string, start_time: Date, end_time: Date | null, price: number; image: string }

    const { username } = await parent();

    const [rentedItemsQuery, rentedItemsError] = await trycatchasync(async () => await promisePool.execute(`SELECT i.name, ri.start_time, ri.end_time, i.price, img.url as image FROM rented_items as ri LEFT JOIN items as i ON ri.fk_item = i.id LEFT JOIN ( SELECT * FROM images AS im GROUP BY im.fk_item ) AS img ON i.id = img.fk_item WHERE i.pk_user = ?`, [username]));
    if (rentedItemsError) {
        throw error(500, rentedItemsError);
    }
    const [rentedItems] = rentedItemsQuery as unknown as [RentAnalyticsDB[]];

    const parsed = rentedItems.map(contract => {
        return {
            name: contract.name,
            price: parseFloat(contract.price.toPrecision(3)),
            start_time: contract.start_time,
            end_time: contract.end_time,
            image: contract.image,
            monthsRented: eachMonthOfInterval({ start: contract.start_time, end: contract.end_time ?? contract.start_time }).map(date => ({ year: getYear(date), month: getMonth(date) + 1 }))
        }
    })

    let uniqueRentedItems = [];
    for (const rentedItem of parsed) {
        const uniqueRentedItemIndex = uniqueRentedItems.findIndex(uniq => uniq.name === rentedItem.name)
        if (uniqueRentedItemIndex === -1) {
            uniqueRentedItems.push({
                ...rentedItem,
                rentedPerMonth: rentedItem.monthsRented.map(month => ({ ...month, count: 1 }))
            })
        }
        else {
            const uniqueRentedItem = uniqueRentedItems[uniqueRentedItemIndex];

            uniqueRentedItem.rentedPerMonth = uniqueRentedItem.rentedPerMonth.map(monthData => ({
                ...monthData,
                count: monthData.count + (rentedItem.monthsRented.find(month => month.month === monthData.month) ? 1 : 0)
            }))

            const newMonths = [];
            for (const itMonthData of rentedItem.monthsRented) {
                if (uniqueRentedItem.monthsRented.findIndex(uniqueMonth => uniqueMonth.year === itMonthData.year && uniqueMonth.month === itMonthData.month) === -1) {
                    newMonths.push(itMonthData);
                }
            }

            for (const newMonth of newMonths) {
                uniqueRentedItem.monthsRented.push(newMonth)
                uniqueRentedItem.rentedPerMonth = [...uniqueRentedItem.rentedPerMonth, { ...newMonth, count: 1 }]
            }
        }

    }

    return {
        itemAnalytics: uniqueRentedItems.map(data => ({
            ...data,
            totalProfit: parseFloat(data.rentedPerMonth.reduce((sum, monthData) => sum + data.price * monthData.count, 0).toPrecision(3))
        }))
    }
}