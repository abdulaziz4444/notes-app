import "server-only";
import { drizzle } from "drizzle-orm/libsql"

const url = process.env.DB_FILE_NAME

if (!url) {
    throw new Error("DB_FILE_NAME is not set in .env")
}

export const db = drizzle(url)