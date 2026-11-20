import type { Note } from "./types";

const API_URL = "/api/notes";

export async function fetchNotes(): Promise<Note[]> {
  const response = await fetch(API_URL);
  if (!response) throw new Error("failed to load notes");
  return response.json();
}

export async function createNoteRequest(text: string): Promise<Note> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error("Failed to create note");
  return response.json();
}

export async function deleteNoteRequest(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete note");
}
