import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "@/db/auth-schema";

export const notesTable = sqliteTable(
  "notes",
  {
    id: text("id")
      .primaryKey()
      .$default(() => crypto.randomUUID()),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    text: text("text").notNull(),
    color: text("color"),
    createdAt: text("created_at")
      .notNull()
      .$defaultFn(() => new Date().toISOString()),
  },
  (table) => [index("notes_user_id_idx").on(table.userId)],
);
