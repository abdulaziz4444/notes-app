import type { notesTable } from "@/db/schema";

export type Note = typeof notesTable.$inferSelect;
