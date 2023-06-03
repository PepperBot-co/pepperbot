import "reactflow/dist/style.css";

import useFlowStore, { flowSelector } from "@pb/store/flow-builder.store";
import type { ProOptions } from "reactflow";
import ReactFlow, { Background, Controls, ReactFlowProvider } from "reactflow";
import { shallow } from "zustand/shallow";

import edgeTypes from "./edge-types";
import useLayout from "./hooks/useLayout";
import nodeTypes from "./node-types";

const proOptions: ProOptions = { hideAttribution: true };

const fitViewOptions = {
  padding: 0.3,
};

function ReactFlowView() {
  useLayout();

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useFlowStore(flowSelector, shallow);

  return (
    <ReactFlow
      edges={edges}
      edgeTypes={edgeTypes}
      fitView
      fitViewOptions={fitViewOptions}
      maxZoom={1}
      minZoom={0.5}
      nodes={nodes}
      nodesConnectable={false}
      nodesDraggable={false}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      proOptions={proOptions}
      zoomOnDoubleClick={false}
    >
      <Background gap={25} />
      <Controls />
    </ReactFlow>
  );
}

function ReactFlowWrapper() {
  return (
    <ReactFlowProvider>
      <ReactFlowView />
    </ReactFlowProvider>
  );
}

export default ReactFlowWrapper;
