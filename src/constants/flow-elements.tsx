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
    },
    position: { x: 0, y: 0 },
    type: "intro",
    selected: false,
    selectable: false,
  },
  {
    id: "2",
    data: {
      label: "Message",
      icon: <ChatBubble />,
      description: "Craft a query that requires responses in unformatted text.",
    },
    position: { x: 0, y: 300 },
    type: "workflow",
    selected: false,
    selectable: false,
  },
  {
    id: "3",
    data: {
      label: "Outro",
      icon: <Bolt />,
      description:
        "Write a friendly closing message, blending appreciation and your unique touch.",
    },
    position: { x: 0, y: 600 },
    type: "outro",
    selected: false,
    selectable: false,
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
];
