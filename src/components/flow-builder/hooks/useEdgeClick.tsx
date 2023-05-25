import { useReactFlow, type EdgeProps } from "reactflow";
import { ChatBubble } from "@pb/components/icons";

import { uuid } from "../utils";

/**
 * Custom hook that generates a function to handle edge clicks in a ReactFlow graph.
 * When an edge is clicked, this function inserts a new node between the source and target nodes
 * of the clicked edge, and replaces the clicked edge with two new edges - one from source to new node,
 * and the other from the new node to target.
 *
 * @param {string} id - The ID of the edge that will trigger the function.
 * @returns {Function} A function that handles edge clicks according to the logic defined inside.
 */
function useEdgeClick(id: EdgeProps["id"]) {
  const { setEdges, setNodes, getNode, getEdge } = useReactFlow();

  const handleEdgeClick = () => {
    // Retrieve edge object with given ID
    const edge = getEdge(id);

    if (!edge) {
      return;
    }

    // Retrieve target node object of edge
    const targetNode = getNode(edge.target);

    if (!targetNode) {
      return;
    }

    // Generate unique ID for new node
    const insertNodeId = uuid();

    // Define new node to be inserted
    const insertNode = {
      id: insertNodeId,
      position: { x: targetNode.position.x, y: targetNode.position.y },
      data: {
        label: "Message",
        icon: <ChatBubble />,
        description:
          "Craft a query that requires responses in unformatted text.",
      },
      type: "workflow",
    };

    // Define new edge from source node to new node
    const sourceEdge = {
      id: `${edge.source}->${insertNodeId}`,
      source: edge.source,
      target: insertNodeId,
      type: "workflow",
    };

    // Define new edge from new node to target node
    const targetEdge = {
      id: `${insertNodeId}->${edge.target}`,
      source: insertNodeId,
      target: edge.target,
      type: "workflow",
    };

    // Update edge list, replacing clicked edge with new edges
    setEdges((edges) =>
      edges.filter((e) => e.id !== id).concat([sourceEdge, targetEdge])
    );

    // Insert new node at the position of the target node in the node list
    setNodes((nodes) => {
      const targetNodeIndex = nodes.findIndex(
        (node) => node.id === edge.target
      );

      return [
        ...nodes.slice(0, targetNodeIndex),
        insertNode,
        ...nodes.slice(targetNodeIndex, nodes.length),
      ];
    });
  };

  // Return edge click handler function
  return handleEdgeClick;
}

export default useEdgeClick;
