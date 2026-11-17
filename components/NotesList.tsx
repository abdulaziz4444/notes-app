"use client";

import { useEffect, useState } from "react";
import type { Note } from "@/lib/types";
import NoteCard from "@/components/NoteCard";
import { loadNotes, saveNotes } from "@/lib/notes-storage";


export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(loadNotes())
  }, [])

  function updateNotes(nextNote: Note[]) {
    setNotes(nextNote)
    saveNotes(nextNote)
  }

  function addNote(formData: FormData) {
    const text = String(formData.get("text")).trim();
    if (text === "") return;

    const newNote: Note = { id: crypto.randomUUID(), text };
    updateNotes([...notes, newNote]);
  }

  function deleteNote(id: string) {
    updateNotes(notes.filter((note) => note.id !== id));
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
{notes.length > 0 && (
  <div className="mt-6 flex items-center justify-between">
    <p className="text-sm text-gray-600">
      {notes.length} {notes.length === 1 ? "note" : "notes"}
    </p>
    <button 
    type="button"
    onClick={() => updateNotes([])}
    className="text-sm text-red-600 hover:underline"
    >
     Clear all
    </button>
  </div>
)}

      {notes.length === 0 ? (
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
