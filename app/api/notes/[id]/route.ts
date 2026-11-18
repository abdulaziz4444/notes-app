import { deleteNote, getNoteById } from "@/lib/notes-db";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const note = getNoteById(id);

  if (!note) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  return Response.json(note);
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const deleted = deleteNote(id);

  if (!deleted) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  return new Response(null, { status: 204 });
}
