"use client";

import { useEffect, useState } from "react";
import type { Note } from "@/lib/types";
import NoteCard from "@/components/NoteCard";
import {
  createNoteRequest,
  deleteNoteRequest,
  fetchNotes,
} from "@/lib/notes-api";

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNotes() {
      try {
        const data = await fetchNotes();
        setNotes(data);
      } catch {
        setError("Could not load notes. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadNotes();
  }, []);

  async function addNote(formData: FormData) {
    const text = String(formData.get("text")).trim();
    if (text === "") return;

    try {
      setError(null);
      const newNote = await createNoteRequest(text);
      setNotes((current) => [...current, newNote]);
    } catch {
      setError("Could not save the note.");
    }
  }

  async function deleteNote(id: string) {
    try {
      setError(null);
      await deleteNoteRequest(id);
      setNotes((current) => current.filter((note) => note.id !== id));
    } catch {
      setError("Could not delete the note.");
    }
  }

  return (
    <section className="mt-2">
      <form action={addNote} className="flex gap-2">
        <input
          name="text"
          placeholder="write a note..."
          className="flex-1 rounded border p-2"
        />
        <button className="rounded bg-black px-4 py-2 text-white">add</button>
      </form>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {notes.length > 0 && (
        <p className="mt-6 text-sm text-gray-600">
          {notes.length} {notes.length === 1 ? "note" : "Note"}
        </p>
      )}

      {isloading ? (
        <p className="mt-6 text-gray-500">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="mt-6 text-gray-500">No notes yet.</p>
      ) : (
        <ul className="mt-6 space-y-2">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </ul>
      )}
    </section>
  );
}
