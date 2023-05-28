import BaseInput from "@pb/components/base-input";
import SendArrow from "@pb/components/icons/send-arrow";
import { type KeyboardEvent, useState } from "react";

import { type ChatInputProps } from "./chat-input.types";

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if ((message || "").trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bottom-0 flex items-center">
      <BaseInput
        inputType="input"
        containerCustomClasses="flex-grow"
        className="rounded-l-md border border-base-300 bg-base-100 px-4 py-2 focus:outline-none"
        placeholder="Type your message..."
        aria-label="Type your message..."
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        role="input"
        tabIndex={0}
      />
      <button
        className="h-full rounded-r-md bg-primary px-4 py-3 text-white hover:bg-opacity-90 focus:outline-none"
        onClick={handleSendMessage}
        role="button"
        tabIndex={0}
        type="button"
      >
        <SendArrow />
      </button>
    </div>
  );
};

export default ChatInput;
