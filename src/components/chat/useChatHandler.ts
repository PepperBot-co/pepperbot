import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import { useEffect, useMemo, useState } from "react";
import { shallow } from "zustand/shallow";

import { type PBNodeProps } from "../flow-builder/flow-builder.types";
import { type FlowMessages, type MessageData } from "./chat.types";

/**
 *  A custom hook that handles the chat logic.
 * @returns {Object} - An object containing the following properties:
 */
export const useChatHandler = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [activeNode, setActiveNode] = useState<number>(0);

  const { nodes, updateSelectedNode } = useFlowStore(flowSelector, shallow);

  const flowMessages = useMemo(() => {
    return (nodes as unknown as PBNodeProps[]).map((node) => {
      const { type, id, data } = node;

      return {
        id,
        type: type,
        message: data?.nodeConfigs?.message || "",
        expectedAnswer: data?.nodeConfigs?.expectedAnswer || "",
      } as FlowMessages;
    });
  }, [nodes]);

  useEffect(() => {
    if (messages?.length === 0) {
      const initialMessage = {
        sender: "bot",
        message: flowMessages[0]!.message,
      } as MessageData;

      setMessages([initialMessage]);
      updateSelectedNode(flowMessages[0]!.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const getNextQuestion = () => {
    const nextNode = activeNode + 1;
    if (flowMessages.length > nextNode) {
      const newMessage: MessageData = {
        sender: "bot",
        message: flowMessages[nextNode]!.message,
      };

      setActiveNode(nextNode);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      updateSelectedNode(flowMessages[nextNode]!.id);
    }
  };

  const sendFollowUp = () => {
    const newMessage: MessageData = {
      sender: "bot",
      message: "no no no",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const sendMessage = (message: string) => {
    const newMessage: MessageData = {
      sender: "user",
      message: message,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      if (message !== "wrong answer") {
        getNextQuestion();
      } else {
        sendFollowUp();
      }
    }, 1000);
  };

  return { activeNode, flowMessages, messages, sendMessage, setMessages };
};
