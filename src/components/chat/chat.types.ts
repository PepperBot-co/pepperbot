import { z } from "zod";

export const messageSchema = z.object({
  sender: z.enum(["user", "bot"]),
  message: z.string(),
});

export type MessageData = z.infer<typeof messageSchema>;

const flowMessagesSchema = z.object({
  id: z.string(),
  type: z.string(),
  message: z.string(),
  expectedAnswer: z.string(),
});

export type FlowMessages = z.infer<typeof flowMessagesSchema>;
