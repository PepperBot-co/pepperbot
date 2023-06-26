import ChatInput from "@pb/components/chat-input";
import ResetChat from "@pb/components/icons/reset-chat";
import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import { shallow } from "zustand/shallow";

import { useChatHandler } from "./useChatHandler";

const Chat = () => {
  const { messages, setMessages, sendMessage } = useChatHandler();
  const { updateFlowMode } = useFlowStore(flowSelector, shallow);

  const handleRefreshChat = () => {
    setMessages([]);
  };

  return (
    <>
      <div
        onClick={() => updateFlowMode(0)}
        className="absolute h-[calc(100vh-65px)] w-[50vw]"
      />
      <div className="flex h-[calc(100vh-65px)] w-[50vw] flex-col border-l border-base-300 bg-base-100 p-5">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Daily Standup</h1>
              <p className="text-sm">
                Track daily updates and blockers on autopilot
              </p>
            </div>
            <button
              className="rounded-btn bg-primary px-4 py-2 text-base-100 hover:bg-opacity-90 focus:outline-none"
              onClick={handleRefreshChat}
              role="button"
              tabIndex={0}
              type="button"
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
                message.sender === "bot" ? "chat-start" : "chat-end"
              }`}
            >
              <div className="chat-bubble">{message.message}</div>
            </div>
          ))}
        </div>

        <div className="p-4">
          <ChatInput onSendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default Chat;
