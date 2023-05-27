import { useState } from "react";

import ChatInput from "@pb/components/chat-input";
import ResetChat from "@pb/components/icons/reset-chat";

import { type MessageData } from "./chat.types";

const Chat = () => {
  const [messages, setMessages] = useState<MessageData[]>([
    {
      sender: "user",
      message: "Hello",
    },
    {
      sender: "bot",
      message: "Hi",
    },
  ]);

  const handleSendMessage = (message: string) => {
    const newMessage: MessageData = {
      sender: "user",
      message: message,
    };
    setMessages([...messages, newMessage]);
  };

  const handleRefreshChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-[calc(100vh-65px)] flex-col border-l border-base-300 bg-base-100 p-5">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold">Chat Title</h1>
            <p className="text-sm text-gray-500">Chat Subtitle</p>
          </div>
          <button
            className="rounded-md bg-primary px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none"
            onClick={handleRefreshChat}
          >
            <ResetChat />
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={`message-${index}`}
            className={`chat ${
              message.sender === "bot" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-bubble">{message.message}</div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
