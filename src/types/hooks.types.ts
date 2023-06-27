import { z } from "zod";

const ThemeOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const ThemeOptionsSchema = z.array(ThemeOptionSchema);

export type ThemeOptions = z.infer<typeof ThemeOptionsSchema>;
