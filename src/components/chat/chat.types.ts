export type MessageData = {
  sender: "user" | "bot";
  message: string;
};

export type FlowMessages = {
  id: string;
  type: string;
  message: string;
  expectedAnswer: string;
};
