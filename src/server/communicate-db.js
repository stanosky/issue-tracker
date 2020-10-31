import { connectDB } from "./connect-db";

export const addNewIssue = async (issue) => {
    let db = await connectDB();
    let collection = db.collection("issues");
    await collection.insertOne(issue);
};

export const getData = async () => {
    let db = await connectDB();

    return {
        groups: await db.collection("groups").find({}).toArray(),
        issues: await db.collection("issues").find({}).toArray(),
    };
};
