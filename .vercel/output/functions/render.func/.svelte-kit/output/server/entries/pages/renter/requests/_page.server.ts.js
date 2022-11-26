import { t as trycatchasync } from "../../../../chunks/trycatch.js";
import { e as error } from "../../../../chunks/index2.js";
import { a as getDBRentRequestsForUser } from "../../../../chunks/db2.js";
const load = async ({ parent }) => {
  const userData = await parent();
  const [requests, requestsError] = await trycatchasync(async () => await getDBRentRequestsForUser(userData.username));
  if (requestsError) {
    throw error(500, requestsError);
  }
  return {
    requests
  };
};
export {
  load
};
