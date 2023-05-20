import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
} from "reactflow";
import type { Edge, Node, ProOptions } from "reactflow";

import edgeTypes from "./edge-types";
import nodeTypes from "./node-types";
import useLayout from "./hooks/useLayout";
import { randomLabel } from "./utils";

import "reactflow/dist/style.css";

const proOptions: ProOptions = { hideAttribution: true };

const defaultNodes: Node[] = [
  {
    id: "1",
    data: { label: randomLabel().label, icon: randomLabel().icon },
    position: { x: 0, y: 0 },
    type: "workflow",
  },
  {
    id: "2",
    data: { label: "+" },
    position: { x: 0, y: 150 },
    type: "placeholder",
  },
];

// initial setup: connect the workflow node to the placeholder node with a placeholder edge
const defaultEdges: Edge[] = [
  {
    id: "1=>2",
    source: "1",
    target: "2",
    type: "placeholder",
  },
];

const fitViewOptions = {
  padding: 0.95,
};

function ReactFlowPro() {
  // this hook call ensures that the layout is re-calculated every time the graph changes
  useLayout();

  return (
    <>
      <ReactFlow
        defaultEdges={defaultEdges}
        defaultNodes={defaultNodes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={fitViewOptions}
        minZoom={0.2}
        nodesConnectable={false}
        nodesDraggable={false}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        zoomOnDoubleClick={false}
      >
        <Background />
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
