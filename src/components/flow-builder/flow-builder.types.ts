import { type ReactElement } from "react";
import type {
  Edge,
  EdgeProps,
  Node,
  NodeProps,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";

type NodeData = {
  icon?: ReactElement;
  label: string;
  description?: string;
};

export interface PBNodeProps extends NodeProps {
  data: NodeData;
}

export type CustomEdgeProps = EdgeProps & {
  style?: React.CSSProperties;
};

export type RFState = {
  edges: Edge[];
  nodes: Node[];
  onConnect: OnConnect;
  onEdgesChange: OnEdgesChange;
  onNodesChange: OnNodesChange;
};
