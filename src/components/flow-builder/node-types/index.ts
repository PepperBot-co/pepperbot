import PlaceholderNode from "./placeholder-node";
import WorkflowNode from "./workflow-node";

import { type NodeTypes } from "reactflow";


// two different node types are needed for our example: workflow and placeholder nodes
const nodeTypes: NodeTypes = {
  placeholder: PlaceholderNode,
  workflow: WorkflowNode,
};

export default nodeTypes;
