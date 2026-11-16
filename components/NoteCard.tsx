import type { Note } from "@/lib/types"

type NoteCardProps = {
    note: Note;
};

export default function NoteCard ({ note }: NoteCardProps) {
    return <li className={`rounded border p-3 co ${note.color ?? ""}`}>{note.text}</li>
}