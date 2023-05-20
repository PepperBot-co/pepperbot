import { getBezierPath } from "reactflow";
import type { EdgeProps } from "reactflow";

// the placeholder edges do not have a special functionality, only used as a visual
export default function PlaceholderEdge({
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
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={style}
      className="stroke-dasharray-3-3 fill-none stroke-base-content/80 stroke-1"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
}
