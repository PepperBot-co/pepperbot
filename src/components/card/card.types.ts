import { z } from "zod";

export const cardSchema = z.object({
  description: z.string(),
  flowID: z.string(),
  title: z.string(),
});

export type CardData = z.infer<typeof cardSchema>;
