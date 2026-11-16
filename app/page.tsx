import NoteCard from "@/components/NoteCard";
import type { Note } from "@/lib/types";

export default function HomePage() {
  const notes: Note[] = [
    { id: "1", text: "math" },
    { id: "2", text: "science" },
    { id: "3", text: "biology" },
  ];

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">My Notes</h1>
      <p className="mt-2 text-gray-600">A place to keep my ideas.</p>

      <ul className="mt-6 space-y-2 color: bg-yellow-50">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </ul>
    </main>
  );
}