import { getSession } from "@/lib/session";
import { clearNotes, createNote, getAllNotes } from "@/lib/notes-db";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }
  return Response.json(await getAllNotes(session.user.id));
}

export async function POST(request: Request) {
  const session = await getSession()
  if(!session) {
    return Response.json({ error: "Not logged in" }, { status: 401 })
  }

  const body = await request.json();
  const text = typeof body.text === "string" ? body.text.trim() : "";

  if (text === "") {
    return Response.json({ error: "Text is required" }, { status: 400 });
  }

  const note = await createNote(session.user.id, text);
  return Response.json(note, { status: 201 });
}

export async function DELETE() {
  const session = await getSession()
   if (!session) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }
  
  await clearNotes(session.user.id)
  return new Response(null, { status: 204 })
}