import { eq } from "drizzle-orm";
import { db } from "@/db";
import { notesTable } from "@/db/schema";
import type { Note } from "@/lib/types";

export async function getAllNotes(): Promise<Note[]> {
  return db.select().from(notesTable).orderBy(notesTable.createdAt);
}

export async function getNoteById(id: string): Promise<Note | undefined> {
  const rows = await db.select().from(notesTable).where(eq(notesTable.id, id));
  return rows[0];
}

export async function createNote(text: string): Promise<Note> {
  const [note] = await db.insert(notesTable).values({ text }).returning();
  return note;
}

export async function deleteNote(id: string): Promise<boolean> {
  const deleted = await db
    .delete(notesTable)
    .where(eq(notesTable.id, id))
    .returning();
  return deleted.length > 0;
}

export async function clearNotes(): Promise<void> {
  await db.delete(notesTable);
}