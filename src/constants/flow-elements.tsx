import { Bolt, ChatBubble } from "@pb/components/icons";
import type { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    data: {
      label: "Intro",
      icon: <Bolt />,
      description:
        "Write your into. Add '[reason]' or '[name]' for your personal touch.",
      nodeConfigs: {
        type: "QA",
        message: "Hi, How is your day going so far?",
        expectedAnswer: "",
      },
    },
    position: { x: 0, y: 0 },
    type: "intro",
    selected: false,
    selectable: true,
  },
  {
    id: "2",
    data: {
      label: "Message",
      icon: <ChatBubble />,
      description: "Craft a query that requires responses in unformatted text.",
      nodeConfigs: {
        type: "QA",
        message: "What have you will be doing today?",
        expectedAnswer: "Ticket number is required",
      },
    },
    position: { x: 0, y: 300 },
    type: "workflow",
    selected: false,
    selectable: true,
  },
  {
    id: "3",
    data: {
      label: "Message",
      icon: <ChatBubble />,
      description: "Craft a query that requires responses in unformatted text.",
      nodeConfigs: {
        type: "QA",
        message: "What have you been doing since yesterday?",
        expectedAnswer: "Ticket number is required",
      },
    },
    position: { x: 0, y: 600 },
    type: "outro",
    selected: false,
    selectable: true,
  },
  {
    id: "4",
    data: {
      label: "Outro",
      icon: <Bolt />,
      description:
        "Write a friendly closing message, blending appreciation and your unique touch.",
      nodeConfigs: {
        type: "QA",
        message: "Thank you!",
        expectedAnswer: "",
      },
    },
    position: { x: 0, y: 900 },
    type: "outro",
    selected: false,
    selectable: true,
  },
];

export const initialEdges: Edge[] = [
  {
    id: "1=>2",
    source: "1",
    target: "2",
    type: "workflow",
  },
  {
    id: "2=>3",
    source: "2",
    target: "3",
    type: "workflow",
  },
  {
    id: "3=>4",
    source: "3",
    target: "4",
    type: "workflow",
  },
];
