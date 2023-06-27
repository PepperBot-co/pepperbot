import { initialEdges, initialNodes } from "@pb/constants";
import type {
  Connection,
  EdgeChange,
  NodeChange,
  OnSelectionChangeParams,
} from "reactflow";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { create } from "zustand";

import type {
  FlowMode,
  PBNode,
  RFState,
} from "../components/flow-builder/flow-builder.types";

/**
 * Selector function for extracting specific properties from the RFState.
 * Order changed to have variables ordered alphabetically and function alphabetically
 *
 * @param {RFState} state - The RFState object.
 * @returns {Object} - The extracted properties from the state.
 */
export const flowSelector = (state: RFState) => ({
  edges: state.edges,
  flowMode: state.flowMode,
  nodes: state.nodes,
  selectedNode: state.selectedNode,
  deselectNodes: state.deselectNodes,
  onConnect: state.onConnect,
  onEdgesChange: state.onEdgesChange,
  onNodesChange: state.onNodesChange,
  onSelectionChange: state.onSelectionChange,
  updateFlowMode: state.updateFlowMode,
  updateNodeConfigs: state.updateNodeConfigs,
  updateSelectedNode: state.updateSelectedNode,
});

/**
 * Zustand store for managing the state of a flow diagram.
 *
 * @returns {RFState} - The Zustand store with state and action functions.
 */
const useFlowStore = create<RFState>((set, get) => {
  return {
    edges: initialEdges,
    flowMode: "Edit",
    nodes: initialNodes,
    selectedNode: undefined,
    deselectNodes: () => {
      set({
        nodes: get().nodes.map((node: PBNode) => ({
          ...node,
          selected: false,
        })),
      });
    },
    onConnect: (connection: Connection) => {
      set({
        edges: addEdge(connection, get().edges),
      });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onNodesChange: (changes: NodeChange[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onSelectionChange: (params: OnSelectionChangeParams) => {
      set({
        selectedNode: params.nodes.find((node) => node.selected) || undefined,
      });
    },
    updateFlowMode: (flowMode: FlowMode) => {
      get().deselectNodes();

      set({
        flowMode: flowMode,
      });
    },
    updateNodeConfigs: (nodeId: string, key: string, value: string) => {
      set({
        nodes: get().nodes.map((node: PBNode) => {
          if (node.id === nodeId) {
            node.data.nodeConfigs = { ...node.data.nodeConfigs, [key]: value };
          }

          return node;
        }),
      });
    },
    updateSelectedNode: (nodeId?: string) => {
      if (!nodeId) {
        return;
      }

      set({
        nodes: get().nodes.map((node: PBNode) => {
          if (node.id === nodeId) {
            node.selected = true;
          } else {
            node.selected = false;
          }

          return node;
        }),
      });
    },
  };
});

export default useFlowStore;
