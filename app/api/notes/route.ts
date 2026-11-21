import { createNote, getAllNotes } from "@/lib/notes-db";

export async function GET() {
  return Response.json(await getAllNotes());
}

export async function POST(request: Request) {
  const body = await request.json();
  const text = typeof body.text === "string" ? body.text.trim() : "";

  if (text === "") {
    return Response.json({ error: "Text is required" }, { status: 400 });
  }

  const note = await createNote(text);
  return Response.json(note, { status: 201 });
}
