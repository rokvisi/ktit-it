export function trycatch<Result>(func: () => Result): [Result, undefined] | [undefined, Error] {
    try {
        return [func(), undefined];
    }
    catch (err: any) {
        if (err instanceof Error) {
            return [undefined, err];
        }
        if (typeof err === "string") {
            return [undefined, new Error(err)];
        }

        throw Error("Unknown error type caught by catch.")
    }
}
export async function trycatchasync<Result>(func: () => Promise<Result>): Promise<[Result, undefined] | [undefined, Error]> {
    try {
        return [await func(), undefined];
    }
    catch (err: any) {
        if (err instanceof Error) {
            return [undefined, err];
        }
        if (typeof err === "string") {
            return [undefined, new Error(err)];
        }

        throw Error("Unknown error type caught by catch.")
    }
}