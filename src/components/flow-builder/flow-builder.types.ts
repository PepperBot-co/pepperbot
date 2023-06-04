import { type ReactElement } from "react";
import type {
  Edge,
  EdgeProps,
  Node,
  NodeProps,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  OnSelectionChangeFunc,
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

export enum FlowMode {
  Edit,
  Test,
  Locked,
}

export type RFState = {
  edges: Edge[];
  flowMode: FlowMode;
  nodes: Node[];
  selectedNode: Node | undefined;
  deselectNodes: () => void;
  onConnect: OnConnect;
  onEdgesChange: OnEdgesChange;
  onNodesChange: OnNodesChange;
  onSelectionChange: OnSelectionChangeFunc;
  updateFlowMode: (flowMode: FlowMode) => void;
  updateNodeConfigs: (nodeId: string, key: string, value: string) => void;
};
