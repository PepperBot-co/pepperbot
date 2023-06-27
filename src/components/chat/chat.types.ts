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

const chatHandlerSchema = z.object({
  activeNode: z.number(),
  messages: z.array(messageSchema),
  sendMessage: z.function().args(z.string()).returns(z.void()),
  setMessages: z.function().args(z.array(messageSchema)).returns(z.void()),
  flowMessages: z.array(flowMessagesSchema),
});

export type ChatHandler = z.infer<typeof chatHandlerSchema>;
