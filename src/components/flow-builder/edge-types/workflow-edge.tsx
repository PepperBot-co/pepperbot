import Plus from "@pb/components/icons/plus";
import { EdgeLabelRenderer, getBezierPath } from "reactflow";

import { type CustomEdgeProps } from "../flow-builder.types";
import useEdgeClick from "../hooks/useEdgeClick";

const EdgeButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="edgebutton [&>svg]:stroke-base-100"
    onClick={onClick}
    aria-label="Plus button"
    role="button"
    tabIndex={0}
    type="button"
  >
    <Plus />
  </button>
);

export default function CustomEdge({
  id,
  markerEnd,
  sourcePosition,
  sourceX,
  sourceY,
  style,
  targetPosition,
  targetX,
  targetY,
}: CustomEdgeProps) {
  const onClick = useEdgeClick(id);

  const [edgePath, edgeCenterX, edgeCenterY] = getBezierPath({
    sourcePosition,
    sourceX,
    sourceY,
    targetPosition,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="fill-none stroke-base-content/80 stroke-1"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan rounded-badge pointer-events-auto absolute flex h-10 w-10 items-center justify-center bg-base-content"
          style={{
            transform: `translate(-50%, -50%) translate(${edgeCenterX}px,${edgeCenterY}px)`,
          }}
        >
          <EdgeButton onClick={onClick} />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
