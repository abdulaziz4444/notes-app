import { getSession } from "@/lib/session";
import { clearNotes, createNote, getAllNotes } from "@/lib/notes-db";
import { noteTextSchema } from "@/lib/validations/notes";

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

 const result = noteTextSchema.safeParse(await request.json());

if (!result.success) {
  return Response.json(
    { error: result.error.issues[0].message },
    { status: 400 },
  );
}

const note = await createNote(session.user.id, result.data.text);
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