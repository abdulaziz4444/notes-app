import type { Note } from "@/lib/types"

type NoteCardProps = {
    note: Note;
    onDelete: (id: string) => void;
};

export default function NoteCard ({ note, onDelete }: NoteCardProps) {
    return (
        <li className={`rounded border p-3 flex justify-between ${note.color ?? ""}`}>
          <div>
            <p>{note.text}</p>
            <p className="text-xs text-gray-500">{new Date (note.createdAt).toLocaleString()}</p>
          </div>
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