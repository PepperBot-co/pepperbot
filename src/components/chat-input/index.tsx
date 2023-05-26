import { useState } from "react";
import colors from "tailwindcss/colors";
import { SendArrow } from "@pb/components/icons";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="bottom-0 flex items-center">
      <input
        type="text"
        className="flex-grow rounded-l-md border border-base-300 bg-base-100 px-4 py-2 focus:outline-none"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button
        className="h-full rounded-r-md bg-primary px-4 py-3 text-white hover:bg-opacity-90 focus:outline-none"
        onClick={handleSendMessage}
      >
        <SendArrow fill={colors.white} />
      </button>
    </div>
  );
};

export default ChatInput;
