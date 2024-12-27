import { MongoClient } from "mongodb";

const uri = "your-mongodb-connection-string"; // Replace with your MongoDB URI
const client = new MongoClient(uri);
const dbName = "litigate";

export async function connectToDatabase() {
    if (!client.isConnected) await client.connect();
    const db = client.db(dbName);
    return { db, client };
}
