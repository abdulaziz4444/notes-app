import type { Note } from "@/lib/types"

const STORAGE_KEY = "notes-app:notes";

export function loadNotes (): Note[] {
const saved = localStorage.getItem(STORAGE_KEY)
if(!saved) return []

try {
return JSON.parse(saved) as Note[]
} catch {
return []
}
}

export function saveNotes(notes: Note[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}