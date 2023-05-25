import ReactFlow, { Background, Controls, ReactFlowProvider } from "reactflow";
import { shallow } from "zustand/shallow";
import useFlowStore, { flowSelector } from "@pb/components/flow-builder/store";

import type { ProOptions } from "reactflow";

import edgeTypes from "./edge-types";
import nodeTypes from "./node-types";
import useLayout from "./hooks/useLayout";

import "reactflow/dist/style.css";

const proOptions: ProOptions = { hideAttribution: true };

const fitViewOptions = {
  padding: 0.3,
};

function ReactFlowPro() {
  useLayout();

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useFlowStore(flowSelector, shallow);

  return (
    <>
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
    </>
  );
}

function ReactFlowWrapper() {
  return (
    <ReactFlowProvider>
      <ReactFlowPro />
    </ReactFlowProvider>
  );
}

export default ReactFlowWrapper;
