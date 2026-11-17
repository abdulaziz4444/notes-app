import NotesList from "@/components/NotesList";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">My Notes</h1>
      <p className="mt-2 text-gray-600">A place to keep my ideas.</p>
      <NotesList />
    </main>
  );
}
