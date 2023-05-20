import { getBezierPath, type EdgeProps } from "reactflow";

import useEdgeClick from "../hooks/useEdgeClick";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  markerEnd,
}: EdgeProps) {
  // see the hook for implementation details
  // onClick adds a node in between the nodes that are connected by this edge
  const onClick = useEdgeClick(id);

  const [edgePath, edgeCenterX, edgeCenterY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  // stroke-1 stroke-base-content fill-none stroke-dasharray-3-3
  return (
    <>
      <path
        id={id}
        style={style}
        className="fill-none stroke-base-content/80 stroke-1"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <g transform={`translate(${edgeCenterX}, ${edgeCenterY})`}>
        <rect
          onClick={onClick}
          x={-10}
          y={-10}
          width={20}
          ry={4}
          rx={4}
          height={20}
          className="storke-base-content pointer-events-auto cursor-pointer fill-base-content"
        />
        <text
          className="pointer-events-none select-none fill-primary"
          y={5}
          x={-4.5}
        >
          +
        </text>
      </g>
    </>
  );
}
