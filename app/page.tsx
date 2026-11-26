import NotesList from "@/components/NotesList";
import UserMenu from "@/components/UserMenu";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <header className="flex gap-5 items-center justify-between">
        <h1 className="text-3xl font-bold">My Notes</h1>
        <UserMenu />
      </header>
      <p className="mt-2 text-gray-600">A place to keep my ideas.</p>
      <NotesList />
    </main>
  );
}
