import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { notesTable } from "@/db/schema";
import type { Note } from "@/lib/types";

export async function getAllNotes(userId: string): Promise<Note[]> {
  return db
    .select()
    .from(notesTable)
    .where(eq(notesTable.userId, userId))
    .orderBy(notesTable.createdAt);
}

export async function getNoteById(
  userId: string,
  id: string,
): Promise<Note | undefined> {
  const [note] = await db
    .select()
    .from(notesTable)
    .where(and(eq(notesTable.id, id), eq(notesTable.userId, userId)));
  return note;
}

export async function createNote(userId: string, text: string): Promise<Note> {
  const [note] = await db
    .insert(notesTable)
    .values({ userId, text })
    .returning();
  return note;
}

export async function updateNote(
  userId: string,
  id: string,
  text: string,
): Promise<Note | undefined> {
  const [note] = await db
    .update(notesTable)
    .set({ text })
    .where(and(eq(notesTable.id, id), eq(notesTable.userId, userId)))
    .returning();
  return note;
}

export async function deleteNote(userId: string, id: string): Promise<boolean> {
  const deleted = await db
    .delete(notesTable)
    .where(and(eq(notesTable.id, id), eq(notesTable.userId, userId)))
    .returning();
  return deleted.length > 0;
}

export async function clearNotes(userId: string): Promise<void> {
  await db.delete(notesTable).where(eq(notesTable.userId, userId));
}