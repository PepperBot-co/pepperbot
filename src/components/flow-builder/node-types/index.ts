import { type NodeTypes } from "reactflow";

import introNode from "./intro-node";
import outroNode from "./outro-node";
import WorkflowNode from "./workflow-node";

// two different node types are needed for our example: workflow and placeholder nodes
const nodeTypes: NodeTypes = {
  intro: introNode,
  outro: outroNode,
  workflow: WorkflowNode,
};

export default nodeTypes;
