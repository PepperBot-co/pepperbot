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

export interface PBNode extends Node {
  data: {
    nodeConfigs: {
      [key: string]: string;
    };
  };
}

type nodeConfigs = {
  type?: string;
  message?: string;
  expectedAnswer?: string;
};

type NodeData = {
  icon?: ReactElement;
  label: string;
  description?: string;
  nodeConfigs?: nodeConfigs;
};

export interface PBNodeProps extends NodeProps {
  data: NodeData;
}

export type SelectedNode = PBNodeProps | undefined;

export type CustomEdgeProps = EdgeProps & {
  style?: React.CSSProperties;
};

export type RFState = {
  edges: Edge[];
  nodes: Node[];
  onConnect: OnConnect;
  onEdgesChange: OnEdgesChange;
  onNodesChange: OnNodesChange;
  updateNodeConfigs: (nodeId: string, key: string, value: string) => void;
};
