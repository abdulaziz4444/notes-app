import { z } from "zod";

export const noteTextSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "Text is required")
    .max(500, "Text is too long"),
});