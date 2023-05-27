import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { create } from "zustand";
import { initialNodes, initialEdges } from "@pb/constants";

import type { Connection, EdgeChange, NodeChange } from "reactflow";
import { type RFState } from "../components/flow-builder/flow-builder.types";

/**
 * Selector function for extracting specific properties from the RFState.
 *
 * @param {RFState} state - The RFState object.
 * @returns {Object} - The extracted properties from the state.
 */
export const flowSelector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

/**
 * Zustand store for managing the state of a flow diagram.
 *
 * @returns {RFState} - The Zustand store with state and action functions.
 */
const useFlowStore = create<RFState>((set, get) => {
  return {
    nodes: initialNodes,
    edges: initialEdges,
    onNodesChange: (changes: NodeChange[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onConnect: (connection: Connection) => {
      set({
        edges: addEdge(connection, get().edges),
      });
    },
  };
});

export default useFlowStore;
