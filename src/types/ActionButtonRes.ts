type ActionButtonRes = Promise<{
    state: "success" | "warn" | "error";
    text: string;
}>

export default ActionButtonRes