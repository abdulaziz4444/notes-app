import "server-only";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as authSchema from "@/db/auth-schema"

const isDevelopment = process.env.NODE_ENV === "development";

export const auth = betterAuth({
  baseURL: {
    allowedHosts: ["localhost:3000", "*.vercel.app"],
    protocol: isDevelopment ? "http" : "https",
  },
  
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: authSchema
  }),
  emailAndPassword: {
    enabled: true,
  },
});
