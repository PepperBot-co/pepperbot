import { Handle, Position, type NodeProps } from "reactflow";
import { memo } from "react";

import useNodeClickHandler from "../hooks/useNodeClick";

const WorkflowNode = ({ id, data }: NodeProps) => {
  const onClick = useNodeClickHandler(id);

  return (
    <div
      onClick={onClick}
      className="node-primary justify-start p-3"
      title="click to add a child node"
    >
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-base-content/20">{data.icon}</div>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <p className="text-center text-xs">{data.label}</p>
      <Handle
        className="invisible"
        type="target"
        position={Position.Top}
        isConnectable={false}
      />
      <Handle
        className="invisible"
        type="source"
        position={Position.Bottom}
        isConnectable={false}
      />
    </div>
  );
};

export default memo(WorkflowNode);
