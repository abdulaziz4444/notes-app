import type {Note} from "@/lib/types"


const notes: Note[] = [];


export function getAllNotes(): Note[] {
    return notes;
}

export function getNoteById(id: string): Note | undefined {
    return notes.find((note) => note.id === id)
}

export function createNote(text: string): Note {
const note: Note = {
    id: crypto.randomUUID(),
    text,
    createdAt: new Date().toISOString()
};
notes.push(note);
return note;
}

export function deleteNote(id: string): boolean {
    const index = notes.findIndex((note) => note.id === id)
    if (index === -1) return false

    notes.splice(index, 1)
    return true
}