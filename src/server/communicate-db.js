import { connectDB } from "./connect-db";

export const getData = async () => {
    let db = await connectDB();

    return {
        groups: await db.collection("groups").find({}).toArray(),
        issues: await db.collection("issues").find({}).toArray(),
    };
};
