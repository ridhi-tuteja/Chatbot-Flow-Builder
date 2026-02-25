export function validateFlow(nodes, edges) {
  if (nodes.length <= 1) {
    return { valid: true, message: "Flow Saved!" };
  }

  const nodesWithoutIncoming = nodes.filter(
    (node) => !edges.some((edge) => edge.target === node.id)
  );

  if (nodesWithoutIncoming.length > 1) {
    return {
      valid: false,
      message: "Error: More than one node has empty target handles"
    };
  }

  return { valid: true, message: "Flow Saved Successfully!" };
}