import type { Note } from "@/lib/types"

type NoteCardProps = {
    note: Note;
    onDelete: (id: string) => void;
};

export default function NoteCard ({ note, onDelete }: NoteCardProps) {
    return (
        <li className={`rounded border p-3 flex justify-between ${note.color ?? ""}`}>
           <span> {note.text}</span>
           <button
           type="button"
           onClick={() => onDelete(note.id)}
           className="text-sm text-red-600 hover:underline"
           >
            Delete
           </button>
            </li>
    )
}