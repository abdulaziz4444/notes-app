import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const url = process.env.DATABASE_URL!;
const isLocalFile = url.startsWith("file:");

const shared = {
  schema: ["./db/schema.ts", "./db/auth-schema.ts"],
  out: "./drizzle",
};

export default defineConfig(
  isLocalFile
    ? {
        ...shared,
        dialect: "sqlite",
        dbCredentials: { url },
      }
    : {
        ...shared,
        dialect: "turso",
        dbCredentials: {
          url,
          authToken: process.env.DATABASE_AUTH_TOKEN!,
        },
      },
);
