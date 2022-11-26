function trycatch(func) {
  try {
    return [func(), void 0];
  } catch (err) {
    if (err instanceof Error) {
      return [void 0, err];
    }
    if (typeof err === "string") {
      return [void 0, new Error(err)];
    }
    throw Error("Unknown error type caught by catch.");
  }
}
async function trycatchasync(func) {
  try {
    return [await func(), void 0];
  } catch (err) {
    if (err instanceof Error) {
      return [void 0, err];
    }
    if (typeof err === "string") {
      return [void 0, new Error(err)];
    }
    throw Error("Unknown error type caught by catch.");
  }
}
export {
  trycatch as a,
  trycatchasync as t
};
