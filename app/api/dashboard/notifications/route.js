import { connectToDatabase } from "../../../../lib/db";

export async function GET(req) {
    const { db } = await connectToDatabase();
    const notifications = await db.collection("notifications").find().toArray();
    return NextResponse.json(notifications);
}
