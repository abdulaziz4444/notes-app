import { getSession } from "@/lib/session";
import { deleteNote, getNoteById, updateNote } from "@/lib/notes-db";
import { noteTextSchema } from "@/lib/validations/notes";


type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: RouteParams) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }

  const { id } = await params;
  const note = await getNoteById(session.user.id, id);

  if (!note) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  return Response.json(note);
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }

  const { id } = await params;
  cconst result = noteTextSchema.safeParse(await request.json());

if (!result.success) {
  return Response.json(
    { error: result.error.issues[0].message },
    { status: 400 },
  );
}

const note = await updateNote(session.user.id, id, result.data.text);

  if (!note) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  return Response.json(note);
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteNote(session.user.id, id);

  if (!deleted) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  return new Response(null, { status: 204 });
}