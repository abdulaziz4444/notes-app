export default function HomePage() {
  const notes = ["math", "science", "biology", "chemistry"];
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">My Notes</h1>
      <p className="mt-2 text-gray-600">A place to keep my ideas.</p>

      <ul className="mt-6 space-y-2">
        {notes.map((note) => (
          <li key={note} className="rounded border p-3">{note}</li>
        ))}
      </ul>
    </main>
  );
}
