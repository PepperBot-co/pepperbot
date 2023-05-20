import { memo } from "react";
import { Handle, Position, type NodeProps } from "reactflow";

import usePlaceholderClick from "../hooks/usePlaceholderClick";

const PlaceholderNode = ({ id, data }: NodeProps) => {
  const onClick = usePlaceholderClick(id);

  return (
    <div
      onClick={onClick}
      className="node-primary border-dashed"
      title="click to add a node"
    >
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <p className="text-md text-center">{data.label}</p>
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

export default memo(PlaceholderNode);
