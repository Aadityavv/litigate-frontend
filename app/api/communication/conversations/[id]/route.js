import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params; // Extract the conversation ID from the URL.

  // Simulated database query for messages in a conversation
  const conversationData = {
    id,
    participants: ["User A", "User B"],
    messages: [
      {
        sender: "User A",
        timestamp: "2024-12-20T10:15:00Z",
        content: "Hi, any updates on the case?",
      },
      {
        sender: "User B",
        timestamp: "2024-12-20T10:17:00Z",
        content: "Yes, I've sent the document. Let me know if you need anything else.",
      },
    ],
  };

  // Check if conversation exists (example: simulate missing data)
  if (!conversationData) {
    return NextResponse.json(
      { error: `Conversation with ID ${id} not found.` },
      { status: 404 }
    );
  }

  // Return the conversation details as a JSON response
  return NextResponse.json(conversationData);
}
    