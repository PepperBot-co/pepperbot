import { useReactFlow, getConnectedEdges } from "reactflow";

/**
 * Custom hook that generates a function to handle node deletion in a ReactFlow graph.
 * This function deletes the specified node and any edges connected to it when called.
 * If the node to be deleted has a single parent and single child, a direct edge is created between them.
 *
 * @param {string} id - The ID of the node to be deleted.
 * @returns {() => void} A function that handles node deletion according to the logic defined inside.
 */
function useDeleteNode(id: string): () => void {
  const { setNodes, setEdges, getNode, getEdges } = useReactFlow();

  const handleDeleteNode = () => {
    // Retrieve the node using getNode
    const nodeToDelete = getNode(id);

    // If the node is undefined, stop execution
    if (!nodeToDelete) {
      return;
    }

    // Get the current edges array
    const edges = getEdges();

    // Get the connected edges of the node
    const connectedEdges = getConnectedEdges([nodeToDelete], edges);

    // Get the parent node and child node connected to the node to be deleted
    const parentNodeEdge = edges.find((edge) => edge.target === id);
    const childNodeEdge = edges.find((edge) => edge.source === id);

    // If both parent and child exist, create a new edge between parent and child node
    const newEdge =
      parentNodeEdge && childNodeEdge
        ? {
            id: `${parentNodeEdge.source}=>${childNodeEdge.target}`,
            source: parentNodeEdge.source,
            target: childNodeEdge.target,
            type: "workflow",
          }
        : undefined;

    // Delete any edges connected to the node by filtering them out of the edges array
    // Add the new edge if it exists
    setEdges((prevEdges) => [
      ...prevEdges.filter(
        (edge) =>
          !connectedEdges.some((connectedEdge) => connectedEdge.id === edge.id)
      ),
      ...(newEdge ? [newEdge] : []),
    ]);

    // Delete the node by filtering it out of the nodes array
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  return handleDeleteNode;
}

export default useDeleteNode;
