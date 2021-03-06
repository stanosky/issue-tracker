import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017/issue-tracker3";
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  return db;
}
