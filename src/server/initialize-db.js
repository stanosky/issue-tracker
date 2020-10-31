import { defaultState } from "./default-state";
import { connectDB } from "./connect-db";

// This code will initialize the database with defaultState when there are no data.
(async function initializeDB() {
  let db = await connectDB();
  let groups = await db.collection("groups").find({}).toArray();
  if (!groups.length && process.env.NODE_ENV === "development") {
    for (let collectionName in defaultState) {
      let collection = db.collection(collectionName);
      await collection.insertMany(defaultState[collectionName]);
    }
  }
})();
